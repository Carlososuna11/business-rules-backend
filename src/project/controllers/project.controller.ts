import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	NotFoundException,
	BadRequestException,
	HttpStatus,
	ParseUUIDPipe,
	UseInterceptors,
	UploadedFile,
	ParseFilePipe,
	MaxFileSizeValidator,
	Logger,
	ClassSerializerInterceptor,
	UnsupportedMediaTypeException,
} from '@nestjs/common';
import { MESSAGES, PaginateQueryOptions, ApiPaginatedResponse, exportContext, importContext } from '@common/utils';
import { ProjectsService } from '../services/project.service';
import { CreateProjectDto, EngineDto, UpdateProjectDto, UploadProjectDto, ContextDto } from '../dto';
import { Project } from '@entities/project';
import { URLS } from '@common/constants';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { FileInterceptor } from '@nestjs/platform-express';
import { Engine } from 'typescript-business-rules-engine';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import Ajv from 'ajv';

@Controller(URLS.PROJECTS.base)
@ApiTags('Projects')
@UseInterceptors(ClassSerializerInterceptor)
export class ProjectsController {
	constructor(private readonly projectsService: ProjectsService) {}

	@Post(URLS.PROJECTS.createProject)
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: MESSAGES.CREATED,
		type: Project,
	})
	public async create(@Body() body: CreateProjectDto): Promise<Project> {
		const project = await this.projectsService.create(body);
		return project;
	}

	@Get(URLS.PROJECTS.listProjects)
	@PaginateQueryOptions()
	@ApiPaginatedResponse(Project)
	public async findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Project>> {
		return await this.projectsService.findAll(query);
	}

	@Get(URLS.PROJECTS.getProject)
	public async findOne(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<Project> {
		const project = await this.projectsService.findOne(uuid);
		if (!project) {
			throw new NotFoundException('Project not found');
		}
		return project;
	}

	@Patch(URLS.PROJECTS.updateProject)
	public async update(
		@Param('uuid', ParseUUIDPipe) uuid: string,
		@Body() updateProjectDto: UpdateProjectDto
	): Promise<Project> {
		const project = await this.projectsService.update(uuid, updateProjectDto);
		if (!project) {
			throw new NotFoundException('Project not found');
		}
		if (project.engineFile) {
			// rename the name and description of the engine file
			const engine = await Engine.import(`${__dirname}/../../../public/projects/${project.engineFile}`);
			engine.name = project.name;
			engine.description = project.description;
			await engine.export(`${__dirname}/../../../public/projects/`, project.uuid);
		}
		return project;
	}

	@Delete(URLS.PROJECTS.deleteProject)
	@ApiResponse({
		status: HttpStatus.NO_CONTENT,
		description: MESSAGES.NO_CONTENT,
	})
	public async remove(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<void> {
		const project = await this.projectsService.findOne(uuid);
		if (project.engineFile) {
			// delete the engine file
			fs.unlink(`${__dirname}/../../../public/projects/${project.engineFile}`, (err) => {
				if (err) {
					Logger.error(err, 'ProjectsController.remove');
				}
			});
		}
		if (project.contextFile) {
			// delete the context file
			fs.unlink(`${__dirname}/../../../public/projects/${project.contextFile}`, (err) => {
				if (err) {
					Logger.error(err, 'ProjectsController.remove');
				}
			});
		}
		await this.projectsService.remove(uuid);
	}

	@Post(URLS.PROJECTS.uploadProject)
	@ApiConsumes('multipart/form-data')
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: MESSAGES.CREATED,
		type: Project,
	})
	@ApiBody({
		description: 'TSBR File',
		schema: {
			type: 'object',
			properties: {
				file: {
					type: 'string',
					format: 'binary',
				},
			},
		},
	})
	@UseInterceptors(
		FileInterceptor('file', {
			storage: diskStorage({
				destination: `${__dirname}/../../../public/projects/`,
				filename: (req, file, cb) => {
					const fileNameSplit = file.originalname.split('.');
					const fileExtension = fileNameSplit[fileNameSplit.length - 1];
					cb(null, `${uuidv4()}.${fileExtension}`);
				},
			}),
			fileFilter: (req, file, cb) => {
				const fileNameSplit = file.originalname.split('.');
				const fileExtension = fileNameSplit[fileNameSplit.length - 1];
				if (fileExtension !== 'tsbr') {
					cb(new UnsupportedMediaTypeException('File extension is not valid. Only .tsbr files are allowed'), false);
				}
				cb(null, true);
			},
		})
	)
	public async uploadFile(
		@UploadedFile(
			new ParseFilePipe({
				validators: [new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 10 })],
			})
		)
		file: Express.Multer.File
	): Promise<Project> {
		let engine: Engine;
		try {
			engine = await Engine.import(file.path);
		} catch (e) {
			Logger.error(e, 'ProjectsController.uploadFile');
			// Delete the file
			fs.unlink(file.path, (err) => {
				if (err) {
					Logger.error(err, 'ProjectsController.uploadFile');
				}
			});
			throw new BadRequestException('Error Loading File: Invalid TypeScript Business Rules file');
		}
		const fileName = file.filename.split('.')[0];
		const uploadData: UploadProjectDto = {
			uuid: fileName,
			name: engine.name || 'Untitled Project',
			description: engine.description || '',
			engineFile: file.filename,
		};
		const project = await this.projectsService.upload(uploadData);
		return project;
	}

	@Get(URLS.PROJECTS.getEngine)
	@ApiResponse({
		status: HttpStatus.OK,
		description: MESSAGES.OK,
		type: EngineDto,
	})
	public async getEngine(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<EngineDto> {
		const project = await this.projectsService.findOne(uuid);
		if (!project) {
			throw new NotFoundException('Project not found');
		}

		if (!project.engineFile) {
			const engineObject: EngineDto = {
				name: project.name,
				description: project.description,
				rules: [],
			};
			return engineObject;
		}
		try {
			const engine = await Engine.import(`${__dirname}/../../../public/projects/${project.engineFile}`);
			return engine.toObject();
		} catch (e) {
			Logger.error(e, 'ProjectsController.getEngine');
			const engineObject: EngineDto = {
				name: project.name,
				description: project.description,
				rules: [],
			};
			return engineObject;
		}
	}

	@Post(URLS.PROJECTS.setEngine)
	@ApiResponse({
		status: HttpStatus.OK,
		description: MESSAGES.OK,
		type: EngineDto,
	})
	public async setEngine(@Param('uuid', ParseUUIDPipe) uuid: string, @Body() engineDto: EngineDto): Promise<EngineDto> {
		const project = await this.projectsService.findOne(uuid);
		if (!project) {
			throw new NotFoundException('Project not found');
		}
		let engine: Engine;
		try {
			engine = new Engine(
				engineDto.name || project.name,
				engineDto.rules,
				engineDto.description || project.description
			);
		} catch (e) {
			Logger.error(e, 'ProjectsController.setEngine');
			throw new BadRequestException(`Error Configuring Rules: ${e}`);
		}
		await engine.export(`${__dirname}/../../../public/projects/`, project.uuid);
		project.engineFile = `${project.uuid}.tsbr`;
		await this.projectsService.update(uuid, project);
		return engine.toObject();
	}

	@Get(URLS.PROJECTS.getContext)
	@ApiResponse({
		status: HttpStatus.OK,
		description: MESSAGES.OK,
		type: Object,
	})
	public async getContext(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<object> {
		const project = await this.projectsService.findOne(uuid);
		if (!project) {
			throw new NotFoundException('Project not found');
		}

		if (!project.contextFile) {
			return {};
		}
		try {
			const context = await importContext(`${__dirname}/../../../public/contexts`, project.uuid);
			return JSON.parse(context);
		} catch (e) {
			Logger.error(e, 'ProjectsController.getContext');
			return {};
		}
	}

	@Post(URLS.PROJECTS.setContext)
	@ApiResponse({
		status: HttpStatus.OK,
		description: MESSAGES.OK,
		type: Object,
	})
	public async setContext(@Param('uuid', ParseUUIDPipe) uuid: string, @Body() body: ContextDto): Promise<object> {
		const project = await this.projectsService.findOne(uuid);
		if (!project) {
			throw new NotFoundException('Project not found');
		}

		const ajv = new Ajv();
		// check if context is a valid json schema
		if (!ajv.validateSchema(body.context)) {
			throw new BadRequestException('Invalid Context Schema');
		}

		await exportContext(body.context, `${__dirname}/../../../public/contexts`, project.uuid);

		project.contextFile = `${project.uuid}.json`;
		await this.projectsService.update(uuid, project);

		return body.context;
	}
}

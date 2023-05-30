import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	NotFoundException,
	Res,
	HttpStatus,
	ParseUUIDPipe,
} from '@nestjs/common';
import { MESSAGES, PaginateQueryOptions, ApiPaginatedResponse } from '@common/utils';
import { Response } from 'express';
import { ProjectsService } from '../services/project.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Project } from '@entities/project';
import { URLS } from '@common/constants';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';

@Controller(URLS.PROJECTS.base)
@ApiTags('Projects')
export class ProjectsController {
	constructor(private readonly projectsService: ProjectsService) {}

	@Post(URLS.PROJECTS.createProject)
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: MESSAGES.CREATED,
		type: Project,
	})
	public async create(@Body() body: CreateProjectDto, @Res() res: Response): Promise<Response<Project>> {
		const project = await this.projectsService.create(body);
		return res.status(HttpStatus.CREATED).send(project);
	}

	@Get(URLS.PROJECTS.listProjects)
	@PaginateQueryOptions()
	@ApiPaginatedResponse(Project)
	public async findAll(@Paginate() query: PaginateQuery, @Res() res: Response): Promise<Response<Paginated<Project>>> {
		const projects = await this.projectsService.findAll(query);
		return res.status(HttpStatus.OK).send(projects);
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
		return project;
	}

	@Delete(URLS.PROJECTS.deleteProject)
	public async remove(@Param('uuid', ParseUUIDPipe) uuid: string, @Res() res: Response): Promise<Response<void>> {
		await this.projectsService.remove(uuid);
		return res.status(HttpStatus.NO_CONTENT).send();
	}
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilterOperator, FilterSuffix, PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { CreateProjectDto, UploadProjectDto, UpdateProjectDto } from '../dto';
import { Project } from '@entities/project';

@Injectable()
export class ProjectsService {
	constructor(
		@InjectRepository(Project)
		private readonly repository: Repository<Project>
	) {}

	async upload(uploadProjectDto: UploadProjectDto): Promise<Project> {
		const project = this.repository.create(uploadProjectDto);
		return await this.repository.save(project);
	}

	async create(createProjectDto: CreateProjectDto): Promise<Project> {
		const project = this.repository.create(createProjectDto);
		return await this.repository.save(project);
	}

	async findAll(query: PaginateQuery): Promise<Paginated<Project>> {
		return paginate(query, this.repository, {
			sortableColumns: ['uuid', 'createdAt', 'updatedAt'],
			nullSort: 'last',
			defaultSortBy: [['createdAt', 'DESC']],
			searchableColumns: ['name', 'description'],
			filterableColumns: {
				name: [FilterOperator.EQ, FilterSuffix.NOT],
				isComplete: [FilterOperator.EQ],
			},
		});
	}

	async findOne(uuid: string): Promise<Project | null> {
		return await this.repository.findOneBy({ uuid });
	}

	async update(uuid: string, updateProjectDto: UpdateProjectDto): Promise<Project | null> {
		const project = await this.repository.findOneBy({ uuid });
		if (!project) {
			return null;
		}
		return await this.repository.save({ ...project, ...updateProjectDto });
	}

	async remove(uuid: string): Promise<void> {
		await this.repository.delete(uuid);
	}
}

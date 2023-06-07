import { IsOptional, IsString, IsUUID } from 'class-validator';
import type { Project } from '@entities/project';

export class UploadProjectDto implements Omit<Project, 'createdAt' | 'updatedAt'> {
	@IsUUID()
	uuid: string;

	@IsString()
	name: string;

	@IsOptional()
	engineFile?: string;

	@IsOptional()
	@IsString()
	description: string;

	@IsOptional()
	contextFile?: string;
}

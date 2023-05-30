import { IsOptional, IsString } from 'class-validator';
import type { Project } from '@entities/project';

export class CreateProjectDto
	implements Omit<Project, 'uuid' | 'createdAt' | 'updatedAt' | 'isComplete' | 'contextFile' | 'engineFile'>
{
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	description: string;
}

import { Module } from '@nestjs/common';
import { ProjectsService } from './services/project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '@entities/project';
import { ProjectsController } from './controllers/project.controller';

@Module({
	imports: [TypeOrmModule.forFeature([Project])],
	controllers: [ProjectsController],
	providers: [ProjectsService],
})
export class ProjectsModule {}

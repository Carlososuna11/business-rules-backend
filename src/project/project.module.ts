import { Module } from '@nestjs/common';
import { ProjectsService } from './services/project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '@entities/project';
import { ProjectsController } from './controllers/project.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
	imports: [
		TypeOrmModule.forFeature([Project]),
		MulterModule.register({
			dest: `${__dirname}/../../public/projects/`,
		}),
	],
	controllers: [ProjectsController],
	providers: [ProjectsService],
})
export class ProjectsModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './project.controller';
import { ProjectsService } from '../services/project.service';

describe('ProjectsController', () => {
	let controller: ProjectsController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ProjectsController],
			providers: [ProjectsService],
		}).compile();

		controller = module.get<ProjectsController>(ProjectsController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});

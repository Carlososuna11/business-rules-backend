import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './project.service';
import { Project } from '@entities/project';
describe('ProjectsService', () => {
	let service: ProjectsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ProjectsService],
		}).compile();

		service = module.get<ProjectsService>(ProjectsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should create a project', async () => {
		const project: Project = await service.create({
			name: 'Test Project',
			description: 'A test project',
		});
		expect(project).toBeDefined();
	});

	it('should find a project by uuid', async () => {
		const project: Project = await service.create({
			name: 'Test Project',
			description: 'A test project',
		});
		const foundProject: Project = await service.findOne(project.uuid);
		expect(foundProject).toBeDefined();
	});

	it('should update a project', async () => {
		const project: Project = await service.create({
			name: 'Test Project',
			description: 'A test project',
		});
		const updatedProject: Project = await service.update(project.uuid, {
			name: 'Updated Test Project',
			description: 'An updated test project',
		});
		expect(updatedProject).toBeDefined();

		const foundProject: Project = await service.findOne(project.uuid);
		expect(foundProject).toBeDefined();
		expect(foundProject.name).toEqual('Updated Test Project');
		expect(foundProject.description).toEqual('An updated test project');
	});

	it('should delete a project', async () => {
		const project: Project = await service.create({
			name: 'Test Project',
			description: 'A test project',
		});
		await service.remove(project.uuid);
		const foundProject: Project = await service.findOne(project.uuid);
		expect(foundProject).toBeNull();
	});
});

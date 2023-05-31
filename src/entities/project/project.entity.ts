import { Transform } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity('projects')
export class Project {
	@PrimaryGeneratedColumn('uuid')
	uuid: string;

	@Column({ type: 'varchar', length: 150 })
	name: string;

	@Column({ type: 'text', default: '' })
	description: string;

	@Column({ type: 'varchar', name: 'engine_file', length: 250, nullable: true })
	@Transform(({ value }) => {
		if (value) {
			const host = process.env.BACKEND_HOST || 'http://localhost:3000';
			return `${host}/public/projects/${value}`;
		}
		return value;
	})
	engineFile?: string;

	@Column({ type: 'varchar', name: 'context_file', length: 250, nullable: true })
	@Transform(({ value }) => {
		if (value) {
			const host = process.env.BACKEND_HOST || 'http://localhost:3000';
			return `${host}/public/contexts/${value}`;
		}
		return value;
	})
	contextFile?: string;

	@CreateDateColumn({ type: 'timestamp', name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
	updatedAt: Date;
}

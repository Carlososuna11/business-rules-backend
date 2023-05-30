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
	engineFile?: string;

	@Column({ type: 'varchar', name: 'context_file', length: 250, nullable: true })
	contextFile?: string;

	@Column({ type: 'boolean', name: 'is_complete', default: false })
	isComplete: boolean;

	@CreateDateColumn({ type: 'timestamp', name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
	updatedAt: Date;
}

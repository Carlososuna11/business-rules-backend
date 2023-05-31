import { IsOptional, IsString, IsArray } from 'class-validator';
import type { EngineObject, RuleObject } from 'typescript-business-rules-engine';

export class EngineDto implements EngineObject {
	@IsString()
	@IsOptional()
	name: string;

	@IsString()
	@IsOptional()
	description: string;

	@IsArray()
	rules: RuleObject[];
}

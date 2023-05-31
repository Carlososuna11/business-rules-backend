import { IsObject } from 'class-validator';

export class ContextDto {
	@IsObject()
	context: object;
}

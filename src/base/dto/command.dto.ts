import { ApiProperty } from '@nestjs/swagger';

export class ArgumentInfoDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;

	@ApiProperty({ enum: ['string', 'number', 'boolean', 'object', 'array', 'unknown', 'date', 'set'] })
	acceptedTypes: string[];

	@ApiProperty()
	isOptional: boolean;
}

export class CategoryInfoDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;
}

export class CommandInfoDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	name: string;

	@ApiProperty({ enum: ['function', 'operator', 'context'] })
	type: string;

	@ApiProperty()
	category: CategoryInfoDto;

	@ApiProperty()
	description: string;

	@ApiProperty({ enum: ['variable', 'non-variable'] })
	argumentType: string;

	@ApiProperty({ type: [ArgumentInfoDto] })
	arguments: ArgumentInfoDto[] | ArgumentInfoDto;

	@ApiProperty({ enum: ['string', 'number', 'boolean', 'object', 'array', 'unknown', 'date', 'set'] })
	returnType: string;

	@ApiProperty({ type: [String] })
	examples: string[];
}

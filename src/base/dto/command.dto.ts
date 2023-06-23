import { ApiProperty } from '@nestjs/swagger';

export class ArgumentInfoDto {
	/**
	 * The name of the argument.
	 */
	@ApiProperty()
	name: string;

	/**
	 * The description of the argument.
	 */
	@ApiProperty()
	description: string;

	/**
	 * The accepted types of the argument.
	 */
	@ApiProperty({ enum: ['string', 'number', 'boolean', 'object', 'array', 'unknown', 'date', 'set'] })
	acceptedTypes: string[];

	/**
	 * Whether the argument is optional or not.
	 */
	@ApiProperty()
	isOptional: boolean;
}

export class CategoryInfoDto {
	/**
	 * The id of the category.
	 */
	@ApiProperty()
	id: string;

	/**
	 * The name of the category.
	 */
	@ApiProperty()
	name: string;

	/**
	 * The description of the category.
	 */
	@ApiProperty()
	description: string;
}

export class CommandInfoDto {
	/**
	 * The id of the command.
	 */
	@ApiProperty()
	id: string;

	/**
	 * The name of the command.
	 */
	@ApiProperty()
	name: string;

	/**
	 * The type of the command.
	 */
	@ApiProperty({ enum: ['function', 'operator', 'context'] })
	type: string;

	/**
	 * The category of the command.
	 */
	@ApiProperty()
	category: CategoryInfoDto;

	/**
	 * The description of the command.
	 */
	@ApiProperty()
	description: string;

	/**
	 * The argument type of the command.
	 */
	@ApiProperty({ enum: ['variable', 'non-variable'] })
	argumentType: string;

	/**
	 * The arguments of the command.
	 */
	@ApiProperty({ type: [ArgumentInfoDto] })
	arguments: ArgumentInfoDto[] | ArgumentInfoDto;

	/**
	 * The return type of the command.
	 */
	@ApiProperty({ enum: ['string', 'number', 'boolean', 'object', 'array', 'unknown', 'date', 'set'] })
	returnType: string;

	/**
	 * The examples of the command.
	 */
	@ApiProperty({ type: [String] })
	examples: string[];
}

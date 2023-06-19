// type for record frontend info
export type CommandTypesOptions =
	| 'string'
	| 'number'
	| 'boolean'
	| 'object'
	| 'array'
	| 'unknown'
	| 'date'
	| 'set'
	| 'void';

export type ArgumentInfo = {
	name: string;
	description: string;
	acceptedTypes: CommandTypesOptions[];
	isOptional: boolean;
};

export type CateroryInfo = {
	id: string;
	name: string;
	description: string;
};

export type CommandType = 'function' | 'operator' | 'context';

export type CommandInfo = {
	id: string;
	name: string;
	type: CommandType;
	category: CateroryInfo;
	description: string;
	argumentType: 'variable' | 'non-variable';
	arguments: ArgumentInfo[] | ArgumentInfo;
	returnType: CommandTypesOptions;
	examples: string[];
};

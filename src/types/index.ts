// type for record frontend info
export type CommandTypesOptions = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'unknown' | 'date' | 'set';

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

export type CommandInfo = {
	id: string;
	name: string;
	type: 'function' | 'operator' | 'context';
	category: CateroryInfo;
	description: string;
	argumentType: 'variable' | 'non-variable';
	arguments: ArgumentInfo[] | ArgumentInfo;
	returnType: CommandTypesOptions;
	examples: string[];
};

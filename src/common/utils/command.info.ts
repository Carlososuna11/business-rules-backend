import { CommandInfo } from '../../types';

const operatorsInfo: CommandInfo[] = [
	{
		id: 'and',
		name: 'And',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		description: 'Returns true if all the arguments are true',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'The arguments to be evaluated',
			acceptedTypes: ['boolean'],
			isOptional: false,
		},
		returnType: 'boolean',
		examples: [
			'true && true && true --> true',
			'true && true && false --> false',
			'[true,true,true] --> true',
			'[true,true,false] --> false',
		],
	},
	{
		id: 'addition',
		type: 'operator',
		category: {
			id: 'math-operators',
			name: 'Math Operators',
			description: 'Operators that perform math operations',
		},
		name: 'Addition',
		description: 'Adds two numbers or string numbers together',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the addition',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the addition',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['1 + 1 --> 2', '"1" + "1" --> 2'],
	},
	{
		id: 'between',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Between',
		description: 'Returns true if the first argument is between the second and third arguments',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'value',
				description: 'The value to be evaluated',
				acceptedTypes: ['number', 'string', 'date'],
				isOptional: false,
			},
			{
				name: 'min (inclusive)',
				description: 'The minimum value',
				acceptedTypes: ['number', 'string', 'date'],
				isOptional: false,
			},
			{
				name: 'max (inclusive)',
				description: 'The maximum value',
				acceptedTypes: ['number', 'string', 'date'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: [
			'1 between (0, 2) --> true',
			'1 between (1, 2) --> true',
			'1 between (0, 1) --> true',
			'1 between (1, 1) --> true',
			'1 between (2, 3) --> false',
			'1 between (2, 1) --> false',
		],
	},
	{
		id: 'contains',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Contains',
		description: 'Returns true if the first argument contains the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'value',
				description: 'The value to be evaluated',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
			{
				name: 'list',
				description: 'The list to be searched',
				acceptedTypes: ['array'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: [
			'1 contains [1, 2, 3] --> true',
			'1 contains [2, 3] --> false',
			'"a" contains ["a", "b", "c"] --> true',
			'"a" contains ["b", "c"] --> false',
		],
	},
	{
		id: 'divide',
		type: 'operator',
		category: {
			id: 'math-operators',
			name: 'Math Operators',
			description: 'Operators that perform math operations',
		},
		name: 'Divide',
		description: 'Divides two numbers',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the division',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the division',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['1 / 1 --> 1', '"1" / "1" --> 1'],
	},
	{
		id: 'equal',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Equal',
		description: 'Returns true if the first argument is equal to the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the equality',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the equality',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['1 == 1 --> true', '1 == 2 --> false', '"a" == "a" --> true', '"a" == "b" --> false'],
	},
	{
		id: 'exponentiation',
		type: 'operator',
		category: {
			id: 'math-operators',
			name: 'Math Operators',
			description: 'Operators that perform math operations',
		},
		name: 'Exponentiation',
		description: 'Raises the first argument to the power of the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the exponentiation',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the exponentiation',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['1 ^ 1 --> 1', '"1" ^ "1" --> 1'],
	},
	{
		id: 'greaterEqualThan',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Greater Equal Than',
		description: 'Returns true if the first argument is greater than or equal to the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the comparison',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the comparison',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['1 >= 1 --> true', '1 >= 2 --> false'],
	},
	{
		id: 'greaterThan',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Greater Than',
		description: 'Returns true if the first argument is greater than the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the comparison',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the comparison',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['1 > 1 --> false', '1 > 2 --> false', '2 > 1 --> true'],
	},
	{
		id: 'in',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'In',
		description: 'Returns true if the first argument is in the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'value',
				description: 'The value to be evaluated',
				acceptedTypes: ['string'],
				isOptional: false,
			},
			{
				name: 'list',
				description: 'The list to be searched',
				acceptedTypes: ['object'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['"a" in {"a": 1, "b": 2} --> true', '"a" in {"b": 2} --> false'],
	},
	{
		id: 'isNull',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Is Null',
		description: 'Returns true if the first argument is null',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'value',
				description: 'The value to be evaluated',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['null is null --> true', '1 is null --> false'],
	},
	{
		id: 'LessEqualThan',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Less Equal Than',
		description: 'Returns true if the first argument is less than or equal to the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the comparison',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the comparison',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['1 <= 1 --> true', '1 <= 2 --> true', '2 <= 1 --> false'],
	},
	{
		id: 'LessThan',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Less Than',
		description: 'Returns true if the first argument is less than the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the comparison',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the comparison',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['1 < 1 --> false', '1 < 2 --> true', '2 < 1 --> false'],
	},
	{
		id: 'multiply',
		type: 'operator',
		category: {
			id: 'math-operators',
			name: 'Math Operators',
			description: 'Operators that perform math operations',
		},
		name: 'Multiply',
		description: 'Multiplies two numbers',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the multiplication',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the multiplication',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['1 * 1 --> 1', '"1" * "1" --> 1'],
	},
	{
		id: 'not',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Not',
		description: 'Returns true if the first argument is false',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'value',
				description: 'The value to be evaluated',
				acceptedTypes: ['boolean'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['not true --> false', 'not false --> true'],
	},
	{
		id: 'notEqual',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Not Equal',
		description: 'Returns true if the first argument is not equal to the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the equality',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the equality',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['1 != 1 --> false', '1 != 2 --> true', '"a" != "a" --> false', '"a" != "b" --> true'],
	},
	{
		id: 'or',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Or',
		description: 'Returns true if any of the arguments are true',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'The arguments to be evaluated',
			acceptedTypes: ['boolean'],
			isOptional: false,
		},
		returnType: 'boolean',
		examples: [
			'true || true || true --> true',
			'true || true || false --> true',
			'[true,true,true] --> true',
			'[true,true,false] --> true',
			'[false,false,false] --> false',
		],
	},
	{
		id: 'remainder',
		type: 'operator',
		category: {
			id: 'math-operators',
			name: 'Math Operators',
			description: 'Operators that perform math operations',
		},
		name: 'Remainder',
		description: 'Returns the remainder of the first argument divided by the second argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the remainder',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the remainder',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['1 % 1 --> 0', '"1" % "1" --> 0'],
	},
	{
		id: 'root',
		type: 'operator',
		category: {
			id: 'math-operators',
			name: 'Math Operators',
			description: 'Operators that perform math operations',
		},
		name: 'Root',
		description: 'Returns the nth root of the first argument',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'radicand',
				description: 'The number to be rooted',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'index',
				description: 'The index of the root',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['root(1, 1) --> 1', 'root("1", "1") --> 1'],
	},
	{
		id: 'substraction',
		type: 'operator',
		category: {
			id: 'math-operators',
			name: 'Math Operators',
			description: 'Operators that perform math operations',
		},
		name: 'Substraction',
		description: 'Substracts two numbers',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'left',
				description: 'The left side of the substraction',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'right',
				description: 'The right side of the substraction',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['1 - 1 --> 0', '"1" - "1" --> 0'],
	},
	{
		id: 'xor',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Logic Operators',
			description: 'Operators that evaluate to true or false',
		},
		name: 'Xor',
		description: 'Returns true if only one of the arguments is true',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'The arguments to be evaluated',
			acceptedTypes: ['boolean'],
			isOptional: false,
		},
		returnType: 'boolean',
		examples: [
			'true xor true xor true --> false',
			'true xor true xor false --> true',
			'[true,true,true] --> false',
			'[true,true,false] --> true',
			'[false,false,false] --> false',
		],
	},
];

const functionsInfo: CommandInfo[] = [];

const contextInfo: CommandInfo[] = [];

const commandsInfo: CommandInfo[] = [...operatorsInfo, ...functionsInfo, ...contextInfo];

const getCommandsInfo = (): CommandInfo[] => {
	return commandsInfo;
};

const extendsCommandsInfo = (newCommandsInfo: CommandInfo[]): void => {
	commandsInfo.push(...newCommandsInfo);
};

export { getCommandsInfo, extendsCommandsInfo };

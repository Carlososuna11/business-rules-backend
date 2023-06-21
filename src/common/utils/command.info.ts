import { CommandInfo } from '../../types';

const operatorsInfo: CommandInfo[] = [
	{
		id: 'and',
		name: 'Conjunción (and)',
		type: 'operator',
		category: {
			id: 'logic-operators',
			name: 'Operadores Lógicos',
			description: 'Se usan para combinar dos valores Booleanos y devolver un resultado verdadero o falso',
		},
		description: 'Devuelve verdadero si todos los argumentos son verdaderos',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'Los argumentos a evaluar',
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
		name: 'Adición  (+)',
		type: 'operator',
		category: {
			id: 'aritmetic-operators',
			name: 'Operadores Aritméticos',
			description:
				'Los operadores aritméticos se usan para calcular un valor de dos o más números, o cambiar el signo de un número de positivo a negativo o viceversa',
		},
		description: 'Suma dos números o concatena dos cadenas',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la adición',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la adición',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['1 + 1 --> 2', '"1" + "1" --> 2'],
	},
	{
		id: 'between',
		name: 'Entre (between)',
		type: 'operator',
		category: {
			id: 'special-operators',
			name: 'Operadores Especiales',
			description: 'Se usan para devolver un resultado verdadero o falso a partir de dos valores no booleanos',
		},
		description:
			'Devuelve verdadero si el primer argumento está entre el segundo y el tercer argumento (ambos inclusive) min <= value <= max',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a evaluar',
				acceptedTypes: ['number', 'string', 'date'],
				isOptional: false,
			},
			{
				name: 'min (inclusive)',
				description: 'El valor mínimo',
				acceptedTypes: ['number', 'string', 'date'],
				isOptional: false,
			},
			{
				name: 'max (inclusive)',
				description: 'El valor máximo',
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
		name: 'Contiene (contains)',
		type: 'operator',
		category: {
			id: 'special-operators',
			name: 'Operadores Especiales',
			description: 'Se usan para devolver un resultado verdadero o falso a partir de dos valores no booleanos',
		},
		description: 'Devuelve verdadero si el primer argumento está en el segundo argumento',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a evaluar',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
			{
				name: 'lista',
				description: 'La lista de valores a buscar en',
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
		name: 'División (÷)',
		type: 'operator',
		category: {
			id: 'aritmetic-operators',
			name: 'Operadores Aritméticos',
			description:
				'Los operadores aritméticos se usan para calcular un valor de dos o más números, o cambiar el signo de un número de positivo a negativo o viceversa',
		},
		description: 'Divide dos números',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la división',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la división',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['1 / 1 --> 1', '"1" / "1" --> 1'],
	},
	{
		id: 'equal',
		name: 'Igualdad (==)',
		type: 'operator',
		category: {
			id: 'comparison-operators',
			name: 'Operadores de Comparación',
			description: 'Se usan para comparar valores y devolver un resultado que sea verdadero o falso',
		},
		description: 'Devuelve verdadero si el primer argumento es igual al segundo argumento',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la igualdad',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la igualdad',
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
			id: 'aritmetic-operators',
			name: 'Operadores Aritméticos',
			description:
				'Los operadores aritméticos se usan para calcular un valor de dos o más números, o cambiar el signo de un número de positivo a negativo o viceversa',
		},
		name: 'Exponenciación (potencia)',
		description: 'Eleva el primer argumento a la potencia del segundo argumento',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la exponenciación',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la exponenciación',
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
			id: 'comparison-operators',
			name: 'Operadores de Comparación',
			description: 'Se usan para comparar valores y devolver un resultado que sea verdadero o falso',
		},
		name: 'Mayor o Igual que (≥)',
		description: 'Devuelve verdadero si el primer argumento es mayor o igual que el segundo argumento',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la comparación',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la comparación',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['1 ≥ 1 --> true', '1 ≥ 2 --> false'],
	},
	{
		id: 'greaterThan',
		type: 'operator',
		category: {
			id: 'comparison-operators',
			name: 'Operadores de Comparación',
			description: 'Se usan para comparar valores y devolver un resultado que sea verdadero o falso',
		},
		name: 'Mayor que (>)',
		description: 'Devuelve verdadero si el primer argumento es mayor que el segundo argumento',
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
			id: 'special-operators',
			name: 'Operadores Especiales',
			description: 'Se usan para devolver un resultado verdadero o falso a partir de dos valores no booleanos',
		},
		name: 'En (in)',
		description: 'Devuelve verdadero si el primer argumento se encuentra en el segundo argumento',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a evaluar',
				acceptedTypes: ['string'],
				isOptional: false,
			},
			{
				name: 'objeto',
				description: 'El objeto a buscar en',
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
			id: 'special-operators',
			name: 'Operadores Especiales',
			description: 'Se usan para devolver un resultado verdadero o falso a partir de dos valores no booleanos',
		},
		name: 'Es Nulo (is null)',
		description: 'Devuelve verdadero si el argumento es nulo',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a evaluar',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['null is null --> true', '1 is null --> false'],
	},
	{
		id: 'lessEqualThan',
		type: 'operator',
		category: {
			id: 'comparison-operators',
			name: 'Operadores de Comparación',
			description: 'Se usan para comparar valores y devolver un resultado que sea verdadero o falso',
		},
		name: 'Menor o Igual que (≤)',
		description: 'Devuelve verdadero si el primer argumento es menor o igual que el segundo argumento',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la comparación',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la comparación',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['1 <= 1 --> true', '1 <= 2 --> true', '2 <= 1 --> false'],
	},
	{
		id: 'lessThan',
		type: 'operator',
		category: {
			id: 'comparison-operators',
			name: 'Operadores de Comparación',
			description: 'Se usan para comparar valores y devolver un resultado que sea verdadero o falso',
		},
		name: 'Menor que (<)',
		description: 'Devuelve verdadero si el primer argumento es menor que el segundo argumento',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la comparación',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la comparación',
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
			id: 'aritmetic-operators',
			name: 'Operadores Aritméticos',
			description:
				'Los operadores aritméticos se usan para calcular un valor de dos o más números, o cambiar el signo de un número de positivo a negativo o viceversa',
		},
		name: 'Multiplicación (×)',
		description: 'Multiplica dos números',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la multiplicación',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la multiplicación',
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
			name: 'Operadores Lógicos',
			description: 'Se usan para combinar dos valores Booleanos y devolver un resultado verdadero o falso',
		},
		name: 'No (not)',
		description: 'Retorna verdadero si el argumento es falso',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a evaluar',
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
			id: 'comparison-operators',
			name: 'Operadores de Comparación',
			description: 'Se usan para comparar valores y devolver un resultado que sea verdadero o falso',
		},
		name: 'Desigualdad (!=)',
		description: 'Devuelve verdadero si el primer argumento no es igual al segundo argumento',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la desigualdad',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la desigualdad',
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
			name: 'Operadores Lógicos',
			description: 'Se usan para combinar dos valores Booleanos y devolver un resultado verdadero o falso',
		},
		name: 'Disyunción (or)',
		description: 'Devuelve verdadero si al menos uno de los argumentos es verdadero',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'Los argumentos a evaluar',
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
			id: 'aritmetic-operators',
			name: 'Operadores Aritméticos',
			description:
				'Los operadores aritméticos se usan para calcular un valor de dos o más números, o cambiar el signo de un número de positivo a negativo o viceversa',
		},
		name: 'Resto (mod)',
		description: 'Devuelve el resto de la división entera de dos números',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo del resto',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho del resto',
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
			id: 'aritmetic-operators',
			name: 'Operadores Aritméticos',
			description:
				'Los operadores aritméticos se usan para calcular un valor de dos o más números, o cambiar el signo de un número de positivo a negativo o viceversa',
		},
		name: 'Raíz (root)',
		description: 'Retorna la raíz n-ésima de un número',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'radicando',
				description: 'Es el número del que se quiere conocer la raíz',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'radical',
				description: 'Es el valor del cual se quiere obtener la raíz, la letra n representa el índice',
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
			id: 'aritmetic-operators',
			name: 'Operadores Aritméticos',
			description:
				'Los operadores aritméticos se usan para calcular un valor de dos o más números, o cambiar el signo de un número de positivo a negativo o viceversa',
		},
		name: 'Resta (-)',
		description: 'Resta dos números',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'izquierdo',
				description: 'El lado izquierdo de la substracción',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
			{
				name: 'derecho',
				description: 'El lado derecho de la substracción',
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
			name: 'Operadores Lógicos',
			description: 'Se usan para combinar dos valores Booleanos y devolver un resultado verdadero o falso',
		},
		name: 'Disyunción Exclusiva (xor)',
		description:
			'devuelve verdadero si un número impar de valores de entrada son verdaderos, y falso si un número par de valores de entrada son verdaderos. En otras palabras, si hay una cantidad impar de valores verdaderos, el resultado es verdadero; si hay una cantidad par de valores verdaderos, el resultado es falso. Si hay más de dos valores de entrada, la operación se realiza entre cada par de valores de entrada consecutivos.',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'Los argumentos a evaluar',
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

const functionsInfo: CommandInfo[] = [
	{
		id: 'average',
		name: 'Promedio (avg)',
		type: 'function',
		category: {
			id: 'aggregation-functions',
			name: 'Funciones de Agregación',
			description: 'Se usan para calcular un valor a partir de una lista de valores',
		},
		description: 'Calcula el promedio de una lista de números',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'Los argumentos a evaluar',
			acceptedTypes: ['number', 'string'],
			isOptional: false,
		},
		returnType: 'number',
		examples: ['avg(1, 2, 3) --> 2', 'avg("1", "2", "3") --> 2'],
	},
	{
		id: 'boolToNumber',
		name: 'Booleano a Número (bool-to-number)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Convierte un valor booleano a un número',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a convertir',
				acceptedTypes: ['boolean'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['bool-to-number(true) --> 1', 'bool-to-number(false) --> 0'],
	},
	{
		id: 'ceil',
		name: 'Techo (ceil)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Redondea un número hacia arriba al entero más cercano',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a redondear',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['ceil(1.1) --> 2', 'ceil("1.5") --> 2'],
	},
	{
		id: 'floor',
		name: 'Piso (floor)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Redondea un número hacia abajo al entero más cercano',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a redondear',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['floor(1.1) --> 1', 'floor("1.5") --> 1'],
	},
	{
		id: 'isNaN',
		name: '¿Es Número? (isNaN)',
		type: 'function',
		category: {
			id: 'check-functions',
			name: 'Funciones de Comprobación',
			description: 'Se usan para comprobar si un valor cumple una condición y devolver un resultado verdadero o falso',
		},
		description: 'Devuelve verdadero si el argumento no es un número',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a evaluar',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['isNaN(1) --> false', 'isNaN("a") --> true'],
	},
	{
		id: 'length',
		name: 'Longitud (length)',
		type: 'function',
		category: {
			id: 'aggregation-functions',
			name: 'Funciones de Agregación',
			description: 'Se usan para calcular un valor a partir de una lista de valores',
		},
		description: 'Devuelve la longitud de una lista',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'lista',
				description: 'La lista de la que se quiere conocer la longitud',
				acceptedTypes: ['array'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['length([1, 2, 3, 10]) --> 4', 'length(["1", "2", "3"]) --> 3'],
	},
	{
		id: 'lower',
		name: 'Minúsculas (lower)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Convierte una cadena de caracteres a minúsculas',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'cadena',
				description: 'La cadena a convertir',
				acceptedTypes: ['string'],
				isOptional: false,
			},
		],
		returnType: 'string',
		examples: ['lower("A") --> "a"', 'lower("AaA") --> "aaa"'],
	},
	{
		id: 'max',
		name: 'Máximo (max)',
		type: 'function',
		category: {
			id: 'aggregation-functions',
			name: 'Funciones de Agregación',
			description: 'Se usan para calcular un valor a partir de una lista de valores',
		},
		description: 'Devuelve el valor máximo de una lista de números',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'Los argumentos a evaluar',
			acceptedTypes: ['number', 'string'],
			isOptional: false,
		},
		returnType: 'number',
		examples: ['max(1, 2, 3) --> 3', 'max("1", "2", "3") --> 3'],
	},
	{
		id: 'maxDate',
		name: 'Máxima Fecha (maxDate)',
		type: 'function',
		category: {
			id: 'aggregation-functions',
			name: 'Funciones de Agregación',
			description: 'Se usan para calcular un valor a partir de una lista de valores',
		},
		description: 'Devuelve la fecha más reciente de una lista de fechas',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'Los argumentos a evaluar',
			acceptedTypes: ['date'],
			isOptional: false,
		},
		returnType: 'date',
		examples: ['maxDate(1, 2, 3) --> 3', 'maxDate("1", "2", "3") --> 3'],
	},
	{
		id: 'min',
		name: 'Mínimo (min)',
		type: 'function',
		category: {
			id: 'aggregation-functions',
			name: 'Funciones de Agregación',
			description: 'Se usan para calcular un valor a partir de una lista de valores',
		},
		description: 'Devuelve el valor mínimo de una lista de números',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'Los argumentos a evaluar',
			acceptedTypes: ['number', 'string'],
			isOptional: false,
		},
		returnType: 'number',
		examples: ['min(1, 2, 3) --> 1', 'min("1", "2", "3") --> 1'],
	},
	{
		id: 'minDate',
		name: 'Mínima Fecha (minDate)',
		type: 'function',
		category: {
			id: 'aggregation-functions',
			name: 'Funciones de Agregación',
			description: 'Se usan para calcular un valor a partir de una lista de valores',
		},
		description: 'Devuelve la fecha más antigua de una lista de fechas',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'Los argumentos a evaluar',
			acceptedTypes: ['date'],
			isOptional: false,
		},
		returnType: 'date',
		examples: ['minDate(1, 2, 3) --> 1', 'minDate("1", "2", "3") --> 1'],
	},
	{
		id: 'minObject',
		name: 'Objecto Mínimo (minObject)',
		type: 'function',
		category: {
			id: 'aggregation-functions',
			name: 'Funciones de Agregación',
			description: 'Se usan para calcular un valor a partir de una lista de valores',
		},
		description: 'Devuelve el menor objeto basado en una propiedad',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'lista',
				description: 'La lista de la que se quiere conocer el menor objeto',
				acceptedTypes: ['array'],
				isOptional: false,
			},
			{
				name: 'propiedad',
				description: 'La propiedad por la que se quiere obtener el menor objeto',
				acceptedTypes: ['string'],
				isOptional: false,
			},
		],
		returnType: 'object',
		examples: ['minObject([{"a": 1}, {"a": 2}, {"a": 3}], "a") --> {"a": 1}'],
	},
	{
		id: 'maxObject',
		name: 'Objecto Maximo (maxObject)',
		type: 'function',
		category: {
			id: 'aggregation-functions',
			name: 'Funciones de Agregación',
			description: 'Se usan para calcular un valor a partir de una lista de valores',
		},
		description: 'Devuelve el mayor objeto basado en una propiedad',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'lista',
				description: 'La lista de la que se quiere conocer el mayor objeto',
				acceptedTypes: ['array'],
				isOptional: false,
			},
			{
				name: 'propiedad',
				description: 'La propiedad por la que se quiere obtener el mayor objeto',
				acceptedTypes: ['string'],
				isOptional: false,
			},
		],
		returnType: 'object',
		examples: ['maxObject([{"a": 1}, {"a": 2}, {"a": 3}], "a") --> {"a": 3}'],
	},
	{
		id: 'now',
		name: 'Ahora (now)',
		type: 'function',
		category: {
			id: 'date-functions',
			name: 'Funciones de Fecha',
			description: 'Se usan para obtener información de una fecha',
		},
		description: 'Devuelve la fecha actual',
		argumentType: 'non-variable',
		arguments: [],
		returnType: 'unknown',
		examples: ['now() --> 2021-01-01T00:00:00.000Z'],
	},
	{
		id: 'parseFloat',
		name: 'A Número Decimal (parseFloat)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Convierte una cadena de caracteres a un número decimal',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'cadena',
				description: 'La cadena a convertir',
				acceptedTypes: ['string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['parseFloat("1.1") --> 1.1', 'parseFloat("1") --> 1'],
	},
	{
		id: 'parseInt',
		name: 'A Número Entero (parseInt)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Convierte una cadena de caracteres a un número entero',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'cadena',
				description: 'La cadena a convertir',
				acceptedTypes: ['string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['parseInt("1.1") --> 1', 'parseInt("1") --> 1'],
	},
	{
		id: 'regex',
		name: 'Expresión Regular (regex)',
		type: 'function',
		category: {
			id: 'string-functions',
			name: 'Funciones de Cadena',
			description: 'Se usan para obtener información de una cadena de caracteres',
		},
		description: 'Devuelve verdadero si la cadena de caracteres cumple con la expresión regular',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'cadena',
				description: 'La cadena a evaluar',
				acceptedTypes: ['string'],
				isOptional: false,
			},
			{
				name: 'expresión regular',
				description: 'La expresión regular a evaluar',
				acceptedTypes: ['string'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['regex("hola", "hola") --> true', 'regex("hola buen dia", "\\w+") --> true'],
	},
	{
		id: 'round',
		name: 'Redondeo (round)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Redondea un número al entero más cercano',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a redondear',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['round(1.1) --> 1', 'round("1.5") --> 2'],
	},
	{
		id: 'standardDesviation',
		name: 'Desviación Estándar (std)',
		type: 'function',
		category: {
			id: 'aggregation-functions',
			name: 'Funciones de Agregación',
			description: 'Se usan para calcular un valor a partir de una lista de valores',
		},
		description: 'Calcula la desviación estándar de una lista de números',
		argumentType: 'variable',
		arguments: {
			name: 'args',
			description: 'Los argumentos a evaluar',
			acceptedTypes: ['number', 'string'],
			isOptional: false,
		},
		returnType: 'number',
		examples: ['std(1, 2, 3) --> 0.816496580927726', 'std("1", "2", "3") --> 0.816496580927726'],
	},
	{
		id: 'toBoolean',
		name: 'A Booleano (toBoolean)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Convierte un valor a booleano',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a convertir',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
		],
		returnType: 'boolean',
		examples: ['toBoolean(1) --> true', 'toBoolean("a") --> true', 'toBoolean(null) --> false'],
	},
	{
		id: 'toDate',
		name: 'A Fecha (toDate)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Convierte un valor a fecha',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a convertir',
				acceptedTypes: ['string'],
				isOptional: false,
			},
			{
				name: 'formato',
				description: 'El formato de la fecha',
				acceptedTypes: ['string'],
				isOptional: false,
			},
		],
		returnType: 'date',
		examples: [
			'toDate("2021-01-01T00:00:00.000Z", "yyyy-MM-ddTHH:mm:ss.SSSZ") --> 2021-01-01T00:00:00.000Z',
			'toDate("2021-01-01", "yyyy-MM-dd") --> 2021-01-01T00:00:00.000Z',
		],
	},
	{
		id: 'toString',
		name: 'A Cadena (toString)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Convierte un valor a cadena',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a convertir',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
		],
		returnType: 'string',
		examples: ['toString(1) --> "1"', 'toString("a") --> "a"', 'toString(null) --> ""'],
	},
	{
		id: 'trunc',
		name: 'Truncar (trunc)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Trunca un número al entero más cercano',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'valor',
				description: 'El valor a truncar',
				acceptedTypes: ['number', 'string'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: ['trunc(1.1) --> 1', 'trunc("1.5") --> 1'],
	},
	{
		id: 'upper',
		name: 'Mayúsculas (upper)',
		type: 'function',
		category: {
			id: 'conversion-functions',
			name: 'Funciones de Conversión',
			description: 'Se usan para convertir un valor de un tipo a otro',
		},
		description: 'Convierte una cadena de caracteres a mayúsculas',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'cadena',
				description: 'La cadena a convertir',
				acceptedTypes: ['string'],
				isOptional: false,
			},
		],
		returnType: 'string',
		examples: ['upper("a") --> "A"', 'upper("AaA") --> "AAA"'],
	},
	{
		id: 'YearsFromNow',
		name: 'Años desde ahora (YearsFromNow)',
		type: 'function',
		category: {
			id: 'date-functions',
			name: 'Funciones de Fecha',
			description: 'Se usan para obtener información de una fecha',
		},
		description: 'Devuelve la cantidad de años desde la fecha actual',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'fecha',
				description: 'La fecha a evaluar',
				acceptedTypes: ['date'],
				isOptional: false,
			},
		],
		returnType: 'number',
		examples: [
			`YearsFromNow("2021-01-01T00:00:00.000Z") --> ${new Date().getFullYear() - 2021}`,
			`YearsFromNow("2020-01-01T00:00:00.000Z") --> ${new Date().getFullYear() - 2020}`,
		],
	},
];

const contextInfo: CommandInfo[] = [
	{
		id: 'set',
		name: 'Asignar (set)',
		type: 'context',
		category: {
			id: 'context-functions',
			name: 'Funciones del Dominio de Datos',
			description: 'Se usan para obtener y modificar información del objeto a evaluar',
		},
		description: 'Asigna un valor a una variable',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'clave',
				description: 'La clave de la variable',
				acceptedTypes: ['string'],
				isOptional: false,
			},
			{
				name: 'valor',
				description: 'El valor a asignar',
				acceptedTypes: ['unknown'],
				isOptional: false,
			},
		],
		returnType: 'void',
		examples: [
			'set("data.a", 1) --> undefined // {data:{a:1}}',
			'set("data.b", "a") --> undefined // {data:{a:1,b:"a"}}',
		],
	},
	{
		id: 'get',
		name: 'Obtener (get)',
		type: 'context',
		category: {
			id: 'context-functions',
			name: 'Funciones del Dominio de Datos',
			description: 'Se usan para obtener y modificar información del objeto a evaluar',
		},
		description: 'Obtiene el valor de una variable',
		argumentType: 'non-variable',
		arguments: [
			{
				name: 'clave',
				description: 'La clave de la variable',
				acceptedTypes: ['string'],
				isOptional: false,
			},
		],
		returnType: 'unknown',
		examples: ['get("data.a") --> 1 // {data:{a:1}}', 'get("data.b") --> "a" // {data:{a:1,b:"a"}}'],
	},
];

const commandsInfo: CommandInfo[] = [...operatorsInfo, ...functionsInfo, ...contextInfo];

const getCommandsInfo = (): CommandInfo[] => {
	return commandsInfo;
};

const extendsCommandsInfo = (newCommandsInfo: CommandInfo[]): void => {
	commandsInfo.push(...newCommandsInfo);
};

export { getCommandsInfo, extendsCommandsInfo };

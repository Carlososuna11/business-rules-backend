import { promises as fs } from 'fs';
import * as toJsonSchema from 'to-json-schema';
import { readFile, utils } from 'xlsx';
import { Command } from 'commander';
import { v4 as uuidv4 } from 'uuid';

const program = new Command();
program.version('1.0.0');

const main = async (xlsxPath: string) => {
	try {
		const xlsxFile = readFile(xlsxPath, { sheetRows: 5 });
		const sheetsDatas = xlsxFile.SheetNames.map((sheetName) => {
			return xlsxFile.Sheets[sheetName];
		});

		for (const sheetData of sheetsDatas) {
			const json = utils.sheet_to_json(sheetData, { header: 0 })[0];
			if (!json) {
				console.error(`Sheet ${sheetData.name} is empty`);
				continue;
			}
			const savePath = `./public/static/contexts/${uuidv4()}.json`;
			const schema = toJsonSchema(createSecureKeys(json as object));
			const fileHandle = await fs.open(savePath, 'w');
			await fileHandle.writeFile(JSON.stringify(schema));
			await fileHandle.close();

			console.log(`Schema saved at: ${savePath}`);
		}
	} catch (e) {
		console.error(`An error occurred while converting the csv to json: ${e}`);
	}
};

const createSecureKeys = (obj: object) => {
	// "Hola Mundo" -> "HolaMundo"
	const secureKey = (key: string) => key.replace(/ /g, '');
	const secureKeys = (obj: object) => {
		const keys = Object.keys(obj);
		const secureKeys = keys.map((key) => {
			const value = obj[key];
			if (typeof value === 'object') {
				return { [secureKey(key)]: secureKeys(value) };
			} else {
				return { [secureKey(key)]: value };
			}
		});
		return Object.assign({}, ...secureKeys);
	};
	return secureKeys(obj);
};

program.option('-c, --xlsx <xlsx-file>', 'xlsx file').action(async (options) => {
	if (options.xlsx) {
		try {
			await fs.access(options.xlsx, fs.constants.F_OK);
		} catch {
			console.error(`File: ${options.xlsx} not found. Please provide a valid file path.`);
			return;
		}
		await main(options.xlsx);
	}
});

program.parse();

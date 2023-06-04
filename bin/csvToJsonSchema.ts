import { promises as fs } from 'fs';
import * as toJsonSchema from 'to-json-schema';
import * as Papa from 'papaparse';
import { Command } from 'commander';
import { v4 as uuidv4 } from 'uuid';

const program = new Command();
program.version('1.0.0');

const main = async (csvPath: string) => {
	try {
		const file = await fs.readFile(csvPath, 'utf8');
		// get only the schema and first row of the csv
		const json = Papa.parse(file, {
			header: true,
			preview: 1,
		});

		const savePath = `./public/static/contexts/${uuidv4()}.json`;

		const schema = toJsonSchema(json.data[0]);

		const fileHandle = await fs.open(savePath, 'w');
		await fileHandle.writeFile(JSON.stringify(schema));
		await fileHandle.close();
	} catch (e) {
		console.error(`An error occurred while converting the csv to json: ${e}`);
	}
};

program.option('-c, --csv <csv-file>', 'csv file').action(async (options) => {
	if (options.csv) {
		try {
			await fs.access(options.csv, fs.constants.F_OK);
		} catch {
			console.error(`File: ${options.csv} not found. Please provide a valid file path.`);
			return;
		}
		await main(options.csv);
	}
});

program.parse();

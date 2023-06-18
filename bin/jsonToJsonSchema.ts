import * as toJsonSchema from 'to-json-schema';
import { promises as fs } from 'fs';
import { Command } from 'commander';
import { v4 as uuidv4 } from 'uuid';

const program = new Command();
program.version('1.0.0');

const main = async (jsonPath: string) => {
	try {
		const file = await fs.readFile(jsonPath, 'utf8');
		const json = JSON.parse(file);
		const uuid = uuidv4();
		const schema = {
			title: uuid,
			required: [],
			...toJsonSchema(json),
		};

		const savePath = `./public/static/contexts/${uuid}.json`;

		// save schema
		const fileHandle = await fs.open(savePath, 'w');
		await fileHandle.writeFile(JSON.stringify(schema));
		await fileHandle.close();
		console.log(`Schema saved at: ${savePath}`);
	} catch (e) {
		console.error(`An error occurred while converting the json to json schema: ${e}`);
	}
};

program.option('-j, --json <json-file>', 'json file').action(async (options) => {
	if (options.json) {
		try {
			await fs.access(options.json, fs.constants.F_OK);
		} catch {
			console.error(`File: ${options.json} not found. Please provide a valid file path.`);
			return;
		}
		await main(options.json);
	} else {
		console.error(`Please provide a valid file path. Use --help for more information.`);
	}
});

program.parse();

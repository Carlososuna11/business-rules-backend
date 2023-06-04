import SQLToJsonSchemaConvertor from 'sqema';
import { promises as fs } from 'fs';
import { Command } from 'commander';

const program = new Command();
program.version('1.0.0');

const main = async (databasePath: string) => {
	try {
		const databases = await fs.readFile(databasePath, 'utf8');
		const databasesList = JSON.parse(databases);
		for (const database of databasesList) {
			const conversor = new SQLToJsonSchemaConvertor('postgres', database);

			await conversor.generateJsonSchemas();

			conversor.writeJsonSchemas(`./public/static/contexts`, 'table', 'json');
		}
	} catch (e) {
		console.error(`An error occurred while converting the database structure to json schemas: ${e}`);
	}
};

program.option('-d, --databases <databases-file>', 'database keys file').action(async (options) => {
	if (options.databases) {
		try {
			await fs.access(options.databases, fs.constants.F_OK);
		} catch {
			console.error(`File: ${options.databases} not found. Please provide a valid file path.`);
			return;
		}
		await main(options.databases);
	}
});

program.parse();

import SQLToJsonSchemaConvertor from 'sqema';
import { promises as fs } from 'fs';

const main = async () => {
	// get databases.json file
	const databases = await fs.readFile(`${__dirname}/../databases.json`, 'utf8');
	const databasesList = JSON.parse(databases);

	// for each database
	for (const database of databasesList) {
		const conversor = new SQLToJsonSchemaConvertor('postgres', database);

		await conversor.generateJsonSchemas();

		conversor.writeJsonSchemas(`./public/static/contexts`, 'table', 'json');
	}
};

main();

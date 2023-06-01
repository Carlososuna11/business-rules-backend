import { Logger as NestLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { middleware } from './app.middleware';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { json, urlencoded } from 'body-parser';
import * as fs from 'fs';

/**
 * https://docs.nestjs.com
 * https://github.com/nestjs/nest/tree/master/sample
 * https://github.com/nestjs/nest/issues/2249#issuecomment-494734673
 */
async function bootstrap(): Promise<void> {
	const isProduction = process.env.NODE_ENV === 'production';
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		bufferLogs: true,
	});

	if (isProduction) {
		app.enable('trust proxy');
	}

	// Express Middleware
	middleware(app);

	// Swagger
	await setupSwagger(app);

	// PARSE REQUESTS
	app.use(urlencoded({ extended: true }));
	app.use(
		json({
			limit: '10mb',
		})
	);

	// if not exists create uploads folder
	const mediaPaths = [
		`${__dirname}/../public/projects`,
		`${__dirname}/../public/contexts`,
		`${__dirname}/../public/static`,
		`${__dirname}/../public/static/contexts`,
	];

	for (const location of mediaPaths) {
		try {
			await fs.promises.access(location, fs.constants.F_OK);
		} catch (error) {
			await fs.promises.mkdir(location);
		}
	}

	await app.listen(process.env.PORT || 3000);

	NestLogger.log(`Application is running on: ${await app.getUrl()}`, 'Bootstrap');
}

bootstrap();

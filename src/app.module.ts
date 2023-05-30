import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { CommonModule, AllExceptionsFilter } from './common';
import { configuration } from './config';
import { ProjectsModule } from './project';
import { BaseModule } from './base';

@Module({
	imports: [
		// Configuration
		// https://docs.nestjs.com/techniques/configuration
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		}),
		// Database
		// https://docs.nestjs.com/techniques/database
		TypeOrmModule.forRootAsync({
			useFactory: (config: ConfigService) => ({
				...config.get<TypeOrmModuleOptions>('db'),
			}),
			inject: [ConfigService],
		}),
		// Static Folder
		// https://docs.nestjs.com/recipes/serve-static
		// https://docs.nestjs.com/techniques/mvc
		ServeStaticModule.forRoot({
			rootPath: `${__dirname}/../public`,
			renderPath: '/',
		}),
		// Service Modules
		CommonModule,
		BaseModule,
		ProjectsModule, // Global
		// Module Router
		// https://docs.nestjs.com/recipes/router-module
	],
	providers: [
		// Global Filter, Exception check
		{ provide: APP_FILTER, useClass: AllExceptionsFilter },
		// Global Pipe, Validation check
		// https://docs.nestjs.com/pipes#global-scoped-pipes
		// https://docs.nestjs.com/techniques/validation
		{
			provide: APP_PIPE,
			useValue: new ValidationPipe({
				// disableErrorMessages: true,
				transform: true, // transform object to DTO class
				whitelist: true,
			}),
		},
	],
})
export class AppModule {}

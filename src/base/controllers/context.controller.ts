import { Controller, Get, HttpStatus, Query, Req } from '@nestjs/common';
import { MESSAGES, PaginatedResult } from '@common/utils';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { promises as fs } from 'fs';
import { Request } from 'express';
import { PaginatedResultDto } from '../dto/context.dto';

@Controller()
@ApiTags('Context')
export class ContextController {
	@Get('contexts')
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiResponse({
		status: HttpStatus.OK,
		description: MESSAGES.OK,
		type: PaginatedResultDto,
	})
	public async getStaticContexts(
		@Req() req: Request,
		@Query('page') page = 1,
		@Query('limit') limit = 10
	): Promise<PaginatedResult<object>> {
		const files = await fs.readdir(`${__dirname}/../../../public/static/contexts`);
		const JSONFiles = files.filter((file) => file.endsWith('.json'));
		const fileCount = JSONFiles.length;
		// only read the files for the current page
		const filesForPage = JSONFiles.slice((page - 1) * limit, page * limit);
		const contexts = await Promise.all(
			filesForPage.map(async (file) => {
				const data = await fs.readFile(`${__dirname}/../../../public/static/contexts/${file}`, 'utf-8');
				return JSON.parse(data);
			})
		);
		const host = `${req.protocol}://${req.get('host')}/contexts`;
		const paginatedResult = new PaginatedResult(contexts, page, limit, fileCount, host);
		return paginatedResult;
	}
}

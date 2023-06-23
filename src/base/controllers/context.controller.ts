/**
 * This controller is responsible for handling requests related to contexts.
 */
import { Controller, Get, HttpStatus, Query, Req } from '@nestjs/common';
import { MESSAGES, PaginatedResult } from '@common/utils';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { promises as fs } from 'fs';
import { Request } from 'express';
import { URLS } from '@common/constants';
import { PaginatedResultDto } from '../dto/context.dto';

@Controller(URLS.CONTEXT.base)
@ApiTags('Context')
export class ContextController {
	/**
	 * Returns a paginated result of static contexts.
	 *
	 * @param req The Express request object.
	 * @param page The page number for pagination (optional, default is 1).
	 * @param limit The limit of items per page for pagination (optional, default is 10).
	 * @returns A PaginatedResult object containing the contexts for the specified page and limit.
	 */
	@Get(URLS.CONTEXT.getStaticContexts)
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
		const host = `${req.protocol}://${req.get('host')}`;
		const files = await fs.readdir(`${__dirname}/../../../public/static/contexts`);
		const JSONFiles = files.filter((file) => file.endsWith('.json'));
		const fileCount = JSONFiles.length;
		// only read the files for the current page
		const filesForPage = JSONFiles.slice((page - 1) * limit, page * limit);
		const contexts = await Promise.all(
			filesForPage.map(async (file) => {
				const data = await fs.readFile(`${__dirname}/../../../public/static/contexts/${file}`, 'utf-8');
				const response = {
					data: JSON.parse(data),
					file: `${host}/public/static/contexts/${file}`,
				};
				return response;
			})
		);
		const paginatedResult = new PaginatedResult(contexts, page, limit, fileCount, `${host}${req.path}`);
		return paginatedResult;
	}
}

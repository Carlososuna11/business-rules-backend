import { ApiProperty } from '@nestjs/swagger';

export class PaginatedResultDto<T> {
	/**
	 * Array of objects containing the paginated data
	 */
	@ApiProperty({ type: [Object] })
	data: T[];

	/**
	 * Current page number
	 */
	@ApiProperty()
	page: number;

	/**
	 * Limit of results per page
	 */
	@ApiProperty()
	limit: number;

	/**
	 * Total count of results
	 */
	@ApiProperty()
	totalCount: number;

	/**
	 * URL to the next page of results
	 */
	@ApiProperty()
	next?: string;

	/**
	 * URL to the previous page of results
	 */
	@ApiProperty()
	previous?: string;
}

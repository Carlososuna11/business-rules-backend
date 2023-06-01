import { ApiProperty } from '@nestjs/swagger';

export class PaginatedResultDto<T> {
	@ApiProperty({ type: [Object] })
	data: T[];

	@ApiProperty()
	page: number;

	@ApiProperty()
	limit: number;

	@ApiProperty()
	totalCount: number;

	@ApiProperty()
	next?: string;

	@ApiProperty()
	previous?: string;
}

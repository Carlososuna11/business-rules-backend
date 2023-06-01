import { Controller, Get, HttpStatus } from '@nestjs/common';
import { MESSAGES, getCommandsInfo } from '@common/utils';
import { CommandInfoDto } from '../dto/command.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Commands')
export class CommandController {
	@Get('commands')
	@ApiResponse({
		status: HttpStatus.OK,
		description: MESSAGES.OK,
		type: CommandInfoDto,
		isArray: true,
	})
	public async getCommands(): Promise<CommandInfoDto[]> {
		return getCommandsInfo();
	}
}

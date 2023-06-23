/**
 * Controller to handle engine-related API requests.
 */
import { BadRequestException, Body, Controller, Get, HttpStatus, Post, Logger } from '@nestjs/common';
import { MESSAGES, getCommandsInfo } from '@common/utils';
import { URLS } from '@common/constants';
import { CommandInfoDto } from '../dto/command.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiagramDto, EngineDto } from '../../project/dto';
import { Engine } from 'typescript-business-rules-engine';

@Controller(URLS.ENGINE.base)
@ApiTags('Engine')
export class CommandController {
	/**
	 * Endpoint to retrieve information about available commands.
	 *
	 * @returns {Promise<CommandInfoDto[]>} List of available commands.
	 */
	@Get(URLS.ENGINE.getCommands)
	@ApiResponse({
		status: HttpStatus.OK,
		description: MESSAGES.OK,
		type: CommandInfoDto,
		isArray: true,
	})
	public async getCommands(): Promise<CommandInfoDto[]> {
		return getCommandsInfo();
	}

	/**
	 * Endpoint to convert engine rules into a diagram.
	 *
	 * @param {EngineDto} body - Engine parameters.
	 * @returns {Promise<DiagramDto>} The generated diagram.
	 * @throws {BadRequestException} If there is an error generating the diagram.
	 */
	@Post(URLS.ENGINE.toDiagram)
	@ApiResponse({
		status: HttpStatus.OK,
		description: MESSAGES.OK,
		type: DiagramDto,
	})
	public async toDiagram(@Body() body: EngineDto): Promise<DiagramDto> {
		try {
			const engine = new Engine(body.name, body.rules, body.description);
			const diagram = engine.toDiagram();
			return { diagram };
		} catch (error) {
			Logger.error(error, 'CommandController.toDiagram');
			throw new BadRequestException(error);
		}
	}
}

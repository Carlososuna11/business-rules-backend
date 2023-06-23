import { Controller, Get } from '@nestjs/common';
import {
	HealthCheck,
	HealthCheckResult,
	HealthCheckService,
	HealthIndicatorResult,
	HttpHealthIndicator,
	TypeOrmHealthIndicator,
} from '@nestjs/terminus';

/**
 * A controller class for handling health check requests
 * @constructor
 * @param {HealthCheckService} health - An instance of the HealthCheckService class
 * @param {HttpHealthIndicator} http - An instance of the HttpHealthIndicator class
 * @param {TypeOrmHealthIndicator} db - An instance of the TypeOrmHealthIndicator class
 */
@Controller()
export class HealthController {
	constructor(
		private health: HealthCheckService,
		private http: HttpHealthIndicator,
		private db: TypeOrmHealthIndicator
	) {}

	/**
	 * A GET endpoint for checking the health of the application
	 * @async
	 * @function check
	 * @returns {Promise<HealthCheckResult>} - A promise that resolves to an object indicating the health status of the application
	 */
	@Get('health')
	@HealthCheck()
	public async check(): Promise<HealthCheckResult> {
		return this.health.check([
			async (): Promise<HealthIndicatorResult> => this.http.pingCheck('dns', 'https://1.1.1.1'),
			async (): Promise<HealthIndicatorResult> => this.db.pingCheck('database'),
		]);
	}
}

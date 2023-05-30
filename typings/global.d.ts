export declare global {
	type AnyObject = Record<string, unknown>;

	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: string;
			PORT: string;

			DB_TYPE: string;
			DB_HOST: string;
			DB_PORT: string;
			DB_USER: string;
			DB_PASSWORD: string;
			DB_NAME: string;

		}
	}

	namespace Express {
		interface Request {
			id: string;
		}
	}
}

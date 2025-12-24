// https://github.com/TryGhost/node-sqlite3/blob/master/lib/sqlite3.d.ts
import { Database as DatabaseClass } from 'sqlite3';

interface Config {
	initSqlJs: any;
	wasmFileBaseUrl: string;
}

export class Database extends DatabaseClass {}

export function verbose(): SqlJsAsSqlite;

export function configure(config: Config): void;

export interface SqlJsAsSqlite {
	Database: typeof Database;
	verbose(): this;
	configure(config: Config): void;
}

declare const sqlJsAsSqlite: SqlJsAsSqlite;

export default sqlJsAsSqlite;
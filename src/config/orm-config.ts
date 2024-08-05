import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: process.env.DB_TYPE as 'mysql' | 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/database/entities/*.entity{.ts,.js}', 'database/entities/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}', 'database/migrations/*{.ts,.js}'],
  synchronize: false,
  maxQueryExecutionTime: 300,
  migrationsTransactionMode: 'all',
  entityPrefix: 't_',
  logger: 'file',
  logging: ['query', 'error'],
};

export default new DataSource(dataSourceOptions);

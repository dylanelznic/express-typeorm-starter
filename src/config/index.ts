import dotenv from 'dotenv';
import { User } from 'entities';
import { ConnectionOptions } from 'typeorm';

import { AppVariables } from './types';

dotenv.config();

/** App config variables */
export const appConfig: AppVariables = {
  express: {
    port: process.env.PORT,
  },
};

/** TypeORM config variables */
export const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: [User],
  synchronize: true,
};

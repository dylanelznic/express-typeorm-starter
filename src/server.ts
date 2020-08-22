import 'module-alias/register';
import 'reflect-metadata';

import { appConfig } from 'config';
import { ormConfig } from 'config';
import { createConnection } from 'typeorm';
import { logger } from 'utils';

import app from './app';

/** Create DB connection */
createConnection(ormConfig)
  .then(async () => {
    /** Start server and begin listening on the specified port */
    app.listen(appConfig.express.port, async () => {
      logger.info(`Server now listening on port ${appConfig.express.port}!`);
    });
  })
  .catch((error: Error) => logger.error(`TypeORM connection ${error}`));

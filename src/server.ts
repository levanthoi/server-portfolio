import dbConnect from '@configs/dbConnect.config';
import { envConfig } from '@configs/env.config';
import { logger } from '@configs/logger.config';
import app from 'app';

const server = () => {
  try {
    dbConnect();
    console.log('=== Connect Mongodb Successfully ===');
    app.listen(envConfig.PORT, () => {
      logger.info(`Listen port ${envConfig.PORT}`);
    });
  } catch (error: any) {
    console.log('Connect Mongodb Error');
    logger.error(error.message);
  }
};

server();

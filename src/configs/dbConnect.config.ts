import mongoose from 'mongoose';
import { envConfig } from './env.config';
import { logger } from './logger.config';

const dbConnect = async () => {
  const url = envConfig.MONGODB?.replace('<password>', envConfig.PASSWORD);
  const con = await mongoose.connect(url);

  logger.info(`MongoDB Connected: ${con.connection.host}.`);

  mongoose.connection.on('connecting', () => {
    logger.info('Connecting to Database');
  });

  mongoose.connection.on('connected', () => {
    logger.info('Mongoose Connected to Database');
  });

  mongoose.connection.on('error', err => {
    logger.error(err.message);
  });

  mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose Connection is Disconnected');
  });

  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
};

export default dbConnect;

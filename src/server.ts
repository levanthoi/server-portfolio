import { envConfig } from '@configs/env.config';
import { logger } from '@configs/logger.config';
import app from 'app';

app.listen(envConfig.PORT, () => {
  logger.info(`Listen port ${envConfig.PORT}`);
});

import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import router from '@routes/index';
import { errorMorgan, successMorgan } from '@middlewares/morgan.middleware';
import { errorHandler, notFound } from '@middlewares/error.middleware';

const app: Express = express();

// OPTIONS CORS
const optionsCors = {
  origin:
    process.env.NODE_ENV === 'production'
      ? 'https://profile-beta-eight.vercel.app/'
      : 'http://localhost:3000',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
// Implement
app.use(cors(optionsCors));
// SECURE HEADER HTTP
app.use(helmet());
//Protect Parameter Pollution
app.use(hpp());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: '10kb',
  }),
);
app.use(cookieParser());
app.use(compression());

app.use(successMorgan);
app.use(errorMorgan);

// Route
app.use('/api/v1', router);

// Error hanlder
app.use(notFound);
app.use(errorHandler);

export default app;

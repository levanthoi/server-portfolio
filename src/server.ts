import express, { Express, Request, Response } from 'express';
import 'dotenv/config';

const server: Express = express();
const PORT = process.env.PORT;
server.use(express.json());

server.get('/', (req: Request, res: Response) => {
  res.json('hiii');
});

server.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});

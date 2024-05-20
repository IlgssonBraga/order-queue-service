import express from 'express';
import routes from './routes/index.routes';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());

app.use(routes);

const port = process.env.APP_PORT;

app.listen(port, () => console.log(`Application running at http://localhost:${port}/home`));
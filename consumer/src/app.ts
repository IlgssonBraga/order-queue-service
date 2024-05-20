import express from 'express';
import routes from './routes/index.routes';
import dotenv from 'dotenv';
import consumeQueue from './config/rabbitmq/consumeQueue';
import { AppDataSource } from './infra/db/data-source';

const app = express();
dotenv.config();

app.use(express.json());

app.use(routes);

const port = process.env.APP_PORT;
const queue = process.env.AMQP_QUEUE;

consumeQueue(queue);

// establish database connection
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.listen(port, () => console.log(`Application running at http://localhost:${port}/home`));
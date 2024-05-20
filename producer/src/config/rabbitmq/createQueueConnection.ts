const amqp = require('amqplib');


export default async function createQueueConnection() {
    const connection = await amqp.connect(`amqp://${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`);
    return await connection.createChannel();
  }
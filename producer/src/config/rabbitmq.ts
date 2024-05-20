const amqp = require('amqplib');


export default async function sendToQueue(queue: String,message:any) {
    const connection = await amqp.connect(`amqp://${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`);
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  }
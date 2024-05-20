import createQueueConnection from "./createQueueConnection";


export default async function sendToQueue(queue: string | undefined,message:any) {
    const channel = await createQueueConnection();
    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  }
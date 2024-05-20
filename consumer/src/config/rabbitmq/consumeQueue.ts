import createQueueConnection from "./createQueueConnection";


export default async function consumeQueue(queue: string | undefined) {
    const channel = await createQueueConnection();
    await channel.assertQueue(queue, { durable: false });
    await channel.consume(queue, async (msg: any) => {
      const content = msg.content.toString();
      // const orderData = JSON.parse(content);
      // await orderController.processOrder(orderData);
      console.log(" [x] Received %s", content);
      channel.ack(msg);
    },
    {
      noAck: false,
    }
    )
    // channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  }
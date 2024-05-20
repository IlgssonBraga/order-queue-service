import { OrderService } from "../../services/Order";
import createQueueConnection from "./createQueueConnection";
const orderService  = new OrderService


export default async function consumeQueue(queue: string | undefined) {
    const channel = await createQueueConnection();
    await channel.assertQueue(queue, { durable: false });
    await channel.consume(queue, async (msg: any) => {
      const content = msg.content.toString();
      await orderService.createOrder(JSON.parse(content));
      channel.ack(msg);
      
    },
    {
      noAck: false,
    }
    )
    // channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  }
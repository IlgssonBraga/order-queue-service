import { Request, Response } from "express";
import sendToQueue from "../config/rabbitmq/sendToQueue";

export default class OrderController {
    public async store(req:Request,res:Response){
        const message = req.body;
        const queue = process.env.AMQP_QUEUE;
        await sendToQueue(queue, message);
        res.json({
            message:'Message sent to queue'
        });
    }
}
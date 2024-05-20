import {Router} from 'express';
import sendToQueue from '../../config/rabbitmq';

const orderRoutes = Router();

orderRoutes.get('/orders', (req,res) => res.json({
    message:"orders"
}));

orderRoutes.post('/orders', async (req, res) => {
    const message = req.body;
    const queue = "orders"
    await sendToQueue(queue, message);
    res.send('Message sent to queue');
  });

export default orderRoutes;
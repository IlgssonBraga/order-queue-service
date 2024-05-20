import {Router} from 'express';
// import OrdersController from '../../controllers/OrdersController';

const orderRoutes = Router();

// const ordersController = new OrdersController();

orderRoutes.get('/orders', (req,res) => res.json({
    message:"orders consumer"
}));

// orderRoutes.post('/orders', ordersController.store);

export default orderRoutes;
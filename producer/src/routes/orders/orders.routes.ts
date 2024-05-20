import {Router} from 'express';

const orderRoutes = Router();

orderRoutes.get('/orders', (req,res) => res.json({
    message:"orders"
}));

export default orderRoutes;
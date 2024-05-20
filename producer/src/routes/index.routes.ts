import {Router} from 'express';
import orderRoutes from './orders/orders.routes';

const routes = Router();

routes.get('/home', (req,res) => res.json({
    message:"Hello world!"
}));

routes.use(orderRoutes);

export default routes;
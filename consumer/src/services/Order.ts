import { IOrder,IOrderService } from "./DTOs/OrderDTO";
import { orderRepository } from '../repositories/Order';

export class OrderService implements IOrderService{
    

    public async createOrder(order:IOrder): Promise<IOrder | null> {
        const insertOrder = orderRepository.create(order);
        await orderRepository.save(insertOrder);
        return null
    }
}
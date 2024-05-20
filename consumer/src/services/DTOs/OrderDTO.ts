export interface IOrder{
    customer_name: string;
    price: number;
    qtd_items: number
}
export interface IOrderService {
    createOrder(user:IOrder): Promise<IOrder | null>;
}

import { AppDataSource } from '../infra/db/data-source';
import { Order } from '../models/Order';

export const orderRepository = AppDataSource.getRepository(Order); 
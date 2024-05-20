import { Entity, PrimaryGeneratedColumn, Column  } from "typeorm";

@Entity({ name: 'orders' })
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    customer_name: string

    @Column({ type: 'int'})
    price: number

    @Column({ type: 'int'})
    qtd_items: number
}
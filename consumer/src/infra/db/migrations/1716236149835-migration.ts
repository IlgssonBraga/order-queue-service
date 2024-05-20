import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1716236149835 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE orders (
                id SERIAL PRIMARY KEY,
                customer_name VARCHAR(255),
                price int, 
                qtd_items int
            )`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE orders`,
        )
    }

}

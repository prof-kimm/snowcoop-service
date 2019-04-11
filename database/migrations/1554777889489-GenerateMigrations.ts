import {MigrationInterface, QueryRunner} from "typeorm";

export class GenerateMigrations1554777889489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `address` (`id` varchar(36) NOT NULL, `street` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `province` varchar(255) NOT NULL, `postalCode` varchar(255) NOT NULL, `lat` int NOT NULL, `lng` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `address`");
    }

}

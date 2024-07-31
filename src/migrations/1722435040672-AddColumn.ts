import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumn1722435040672 implements MigrationInterface {
    name = 'AddColumn1722435040672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedDate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "deletedDate" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "deletedDate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedDate"`);
    }

}

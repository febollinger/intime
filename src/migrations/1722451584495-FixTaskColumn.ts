import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTaskColumn1722451584495 implements MigrationInterface {
    name = 'FixTaskColumn1722451584495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "created_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "created_at" DROP DEFAULT`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class FixingColumn11721763229426 implements MigrationInterface {
    name = 'FixingColumn11721763229426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" DROP DEFAULT`);
    }

}

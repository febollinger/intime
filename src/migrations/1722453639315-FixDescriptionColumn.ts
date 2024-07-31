import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDescriptionColumn1722453639315 implements MigrationInterface {
    name = 'FixDescriptionColumn1722453639315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "UQ_c9f361efbefcdff99c1ccfd1a3f"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "UQ_c9f361efbefcdff99c1ccfd1a3f" UNIQUE ("description")`);
    }

}

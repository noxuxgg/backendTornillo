import { MigrationInterface, QueryRunner } from "typeorm";

export class Asdfasdf1782682066436 implements MigrationInterface {
    name = 'Asdfasdf1782682066436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diagnosticos" ADD CONSTRAINT "FK_9d0349344b43a9a77974aa50cf0" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diagnosticos" DROP CONSTRAINT "FK_9d0349344b43a9a77974aa50cf0"`);
    }

}

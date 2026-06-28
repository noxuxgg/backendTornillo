import { MigrationInterface, QueryRunner } from "typeorm";

export class Fer1782659342575 implements MigrationInterface {
    name = 'Fer1782659342575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "descripcion" character varying(255), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "diagnosticos" ("id" SERIAL NOT NULL, "servicioId" integer, "usuarioId" integer NOT NULL, "tipoDiagnostico" character varying(255) NOT NULL, "descripcionDiagnostico" text NOT NULL, "fechaRegistro" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d8400650a85355bdd4ada0f0c5a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "roleId" integer NOT NULL, "ci" character varying(255) NOT NULL, "nombre" character varying(255) NOT NULL, "apellido" character varying(255) NOT NULL, "telefono" character varying(255), "password" character varying(255) NOT NULL DEFAULT '$2b$10$eImiTXuWVneM97Y7VGbPae3Z9p3I1f/6NWhfM2q0wN4eExXqI9SyC', CONSTRAINT "UQ_fd8b5c84c2f705da1269282078c" UNIQUE ("ci"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "electrodomesticos" ("id" SERIAL NOT NULL, "clientId" integer NOT NULL, "tipo" character varying(255) NOT NULL, "marca" character varying(255) NOT NULL, "modelo" character varying(255) NOT NULL, "numeroSerie" character varying(255) NOT NULL, "observaciones" text, CONSTRAINT "PK_10be57e0d6401dca39dbac11734" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "presupuestos" ("id" SERIAL NOT NULL, "servicioId" integer NOT NULL, "costoManoObra" numeric(10,2) NOT NULL, "costoRepuestos" numeric(10,2) NOT NULL, "total" numeric(10,2) NOT NULL, "fechaRegistro" TIMESTAMP NOT NULL DEFAULT now(), "aprobado" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_4a44c11f4d06bd130088d3f696d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "servicios" ("id" SERIAL NOT NULL, "fechaProgramada" TIMESTAMP, "duracionEstimada" TIME, "duracionReal" TIME, "estDomicilio" boolean NOT NULL DEFAULT false, "direccionServicio" character varying(255), "recargoDomicilio" numeric(10,2) NOT NULL DEFAULT '0', "estado" character varying(50) NOT NULL DEFAULT 'Pendiente', CONSTRAINT "PK_fefcdbfeaf506ca485a6dcfb0d8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "diagnosticos" ADD CONSTRAINT "FK_78cd8db40be58d530776492c3bb" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_103ef6f6e21ebd7a1559716248c" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "electrodomesticos" ADD CONSTRAINT "FK_da89c15adb68692410501d24a48" FOREIGN KEY ("clientId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "presupuestos" ADD CONSTRAINT "FK_e4b39c3bc4372528e59f8aba62b" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "presupuestos" DROP CONSTRAINT "FK_e4b39c3bc4372528e59f8aba62b"`);
        await queryRunner.query(`ALTER TABLE "electrodomesticos" DROP CONSTRAINT "FK_da89c15adb68692410501d24a48"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_103ef6f6e21ebd7a1559716248c"`);
        await queryRunner.query(`ALTER TABLE "diagnosticos" DROP CONSTRAINT "FK_78cd8db40be58d530776492c3bb"`);
        await queryRunner.query(`DROP TABLE "servicios"`);
        await queryRunner.query(`DROP TABLE "presupuestos"`);
        await queryRunner.query(`DROP TABLE "electrodomesticos"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "diagnosticos"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}

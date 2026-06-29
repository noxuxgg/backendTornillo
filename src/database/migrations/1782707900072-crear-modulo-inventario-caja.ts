import { MigrationInterface, QueryRunner } from "typeorm";

export class CrearModuloInventarioCaja1782707900072 implements MigrationInterface {
    name = 'CrearModuloInventarioCaja1782707900072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "descripcion" character varying(255), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "presupuestos" ("id" SERIAL NOT NULL, "servicioId" integer NOT NULL, "costoManoObra" numeric(10,2) NOT NULL, "costoRepuestos" numeric(10,2) NOT NULL, "total" numeric(10,2) NOT NULL, "fechaRegistro" TIMESTAMP NOT NULL DEFAULT now(), "aprobado" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_4a44c11f4d06bd130088d3f696d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "servicios" ("id" SERIAL NOT NULL, "fechaProgramada" TIMESTAMP, "duracionEstimada" TIME, "duracionReal" TIME, "estDomicilio" boolean NOT NULL DEFAULT false, "direccionServicio" character varying(255), "recargoDomicilio" numeric(10,2) NOT NULL DEFAULT '0', "estado" character varying(50) NOT NULL DEFAULT 'Pendiente', "clienteId" integer, "tecnicoId" integer, CONSTRAINT "PK_fefcdbfeaf506ca485a6dcfb0d8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "diagnosticos" ("id" SERIAL NOT NULL, "servicioId" integer, "usuarioId" integer NOT NULL, "tipoDiagnostico" character varying(255) NOT NULL, "descripcionDiagnostico" text NOT NULL, "fechaRegistro" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d8400650a85355bdd4ada0f0c5a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "roleId" integer NOT NULL, "ci" character varying(255) NOT NULL, "nombre" character varying(255) NOT NULL, "apellido" character varying(255) NOT NULL, "telefono" character varying(255), "password" character varying(255) NOT NULL DEFAULT '$2b$10$eImiTXuWVneM97Y7VGbPae3Z9p3I1f/6NWhfM2q0wN4eExXqI9SyC', CONSTRAINT "UQ_fd8b5c84c2f705da1269282078c" UNIQUE ("ci"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categorias" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "descripcion" character varying(255), CONSTRAINT "PK_3886a26251605c571c6b4f861fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detalleInsumosServicio" ("id" SERIAL NOT NULL, "servicioId" integer NOT NULL, "loteId" integer NOT NULL, "cantidadUtilizada" numeric(10,2) NOT NULL, "precioAplicado" numeric(10,2) NOT NULL, CONSTRAINT "PK_7c663c925340d159acf5c20b13f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lotes" ("id" SERIAL NOT NULL, "insumoId" integer NOT NULL, "codigoLote" character varying(100) NOT NULL, "precioCompra" numeric(10,2) NOT NULL, "precioVentaSugerido" numeric(10,2) NOT NULL, "stockActual" numeric(10,2) NOT NULL, "fechaIngreso" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6eda564423c09706b95cbf8ae1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "insumos" ("id" SERIAL NOT NULL, "categoriaId" integer NOT NULL, "unidadMedidadId" integer NOT NULL, "codigoBase" character varying(100) NOT NULL, "nombre" character varying(255) NOT NULL, "descripcion" character varying(255), CONSTRAINT "PK_b4e1b727a7b140e698e3a3dc7af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "unidadesMedida" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "abreviacion" character varying(50) NOT NULL, CONSTRAINT "PK_18b4f41c046c12c5e6c61ae1182" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pagos" ("id" SERIAL NOT NULL, "servicioId" integer NOT NULL, "montoTotal" numeric(10,2) NOT NULL, "montoAdelanto" numeric(10,2) NOT NULL DEFAULT '0', "saldoPendiente" numeric(10,2) NOT NULL, "metodoPago" character varying(100) NOT NULL, "completado" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_37321ca70a2ed50885dc205beb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "compras" ("id" SERIAL NOT NULL, "proveedorId" integer NOT NULL, "fechaCompra" TIMESTAMP NOT NULL DEFAULT now(), "estado" character varying(50) NOT NULL, "total" numeric(10,2) NOT NULL, CONSTRAINT "PK_63037d5249eefe140e3587ff6f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detalleCompras" ("id" SERIAL NOT NULL, "compraId" integer NOT NULL, "insumoId" integer NOT NULL, "cantidad" numeric(10,2) NOT NULL, "precioUnitario" numeric(10,2) NOT NULL, "subtotal" numeric(10,2) NOT NULL, CONSTRAINT "PK_587fbc9ff26248c01a236e5f869" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "proveedores" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "telefono" character varying(50), "direccion" character varying(255), "tipoProveedor" character varying(100), CONSTRAINT "PK_1dcf121f19f362fb1b4c0a493a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "facturas" ("id" SERIAL NOT NULL, "servicioId" integer NOT NULL, "numeroFactura" character varying(100) NOT NULL, "fechaEmision" TIMESTAMP NOT NULL DEFAULT now(), "monto" numeric(10,2) NOT NULL, "nit" character varying(50) NOT NULL, "razonSocial" character varying(255) NOT NULL, CONSTRAINT "PK_f302947c1e4773639b20707a8bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "electrodomesticos" ("id" SERIAL NOT NULL, "clientId" integer NOT NULL, "tipo" character varying(255) NOT NULL, "marca" character varying(255) NOT NULL, "modelo" character varying(255) NOT NULL, "numeroSerie" character varying(255) NOT NULL, "observaciones" text, CONSTRAINT "PK_10be57e0d6401dca39dbac11734" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "presupuestos" ADD CONSTRAINT "FK_e4b39c3bc4372528e59f8aba62b" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "servicios" ADD CONSTRAINT "FK_59230e2ef5214ac9f6d950b21cd" FOREIGN KEY ("clienteId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "servicios" ADD CONSTRAINT "FK_d09cb8230edcd64dfeff94f88d1" FOREIGN KEY ("tecnicoId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "diagnosticos" ADD CONSTRAINT "FK_78cd8db40be58d530776492c3bb" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "diagnosticos" ADD CONSTRAINT "FK_9d0349344b43a9a77974aa50cf0" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_103ef6f6e21ebd7a1559716248c" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalleInsumosServicio" ADD CONSTRAINT "FK_cda19fab4e32a46daffd08df8ed" FOREIGN KEY ("loteId") REFERENCES "lotes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lotes" ADD CONSTRAINT "FK_7d088c540a4754afc069ca8e382" FOREIGN KEY ("insumoId") REFERENCES "insumos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD CONSTRAINT "FK_1acafbf46b10a4650b5935ee728" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD CONSTRAINT "FK_7f40d16b7a5f44c3a7ed502bd1f" FOREIGN KEY ("unidadMedidadId") REFERENCES "unidadesMedida"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compras" ADD CONSTRAINT "FK_ccbc87d4d0703f780e5f55f1f04" FOREIGN KEY ("proveedorId") REFERENCES "proveedores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalleCompras" ADD CONSTRAINT "FK_be61bb7930ded179a91f5247d74" FOREIGN KEY ("compraId") REFERENCES "compras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "electrodomesticos" ADD CONSTRAINT "FK_da89c15adb68692410501d24a48" FOREIGN KEY ("clientId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "electrodomesticos" DROP CONSTRAINT "FK_da89c15adb68692410501d24a48"`);
        await queryRunner.query(`ALTER TABLE "detalleCompras" DROP CONSTRAINT "FK_be61bb7930ded179a91f5247d74"`);
        await queryRunner.query(`ALTER TABLE "compras" DROP CONSTRAINT "FK_ccbc87d4d0703f780e5f55f1f04"`);
        await queryRunner.query(`ALTER TABLE "insumos" DROP CONSTRAINT "FK_7f40d16b7a5f44c3a7ed502bd1f"`);
        await queryRunner.query(`ALTER TABLE "insumos" DROP CONSTRAINT "FK_1acafbf46b10a4650b5935ee728"`);
        await queryRunner.query(`ALTER TABLE "lotes" DROP CONSTRAINT "FK_7d088c540a4754afc069ca8e382"`);
        await queryRunner.query(`ALTER TABLE "detalleInsumosServicio" DROP CONSTRAINT "FK_cda19fab4e32a46daffd08df8ed"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_103ef6f6e21ebd7a1559716248c"`);
        await queryRunner.query(`ALTER TABLE "diagnosticos" DROP CONSTRAINT "FK_9d0349344b43a9a77974aa50cf0"`);
        await queryRunner.query(`ALTER TABLE "diagnosticos" DROP CONSTRAINT "FK_78cd8db40be58d530776492c3bb"`);
        await queryRunner.query(`ALTER TABLE "servicios" DROP CONSTRAINT "FK_d09cb8230edcd64dfeff94f88d1"`);
        await queryRunner.query(`ALTER TABLE "servicios" DROP CONSTRAINT "FK_59230e2ef5214ac9f6d950b21cd"`);
        await queryRunner.query(`ALTER TABLE "presupuestos" DROP CONSTRAINT "FK_e4b39c3bc4372528e59f8aba62b"`);
        await queryRunner.query(`DROP TABLE "electrodomesticos"`);
        await queryRunner.query(`DROP TABLE "facturas"`);
        await queryRunner.query(`DROP TABLE "proveedores"`);
        await queryRunner.query(`DROP TABLE "detalleCompras"`);
        await queryRunner.query(`DROP TABLE "compras"`);
        await queryRunner.query(`DROP TABLE "pagos"`);
        await queryRunner.query(`DROP TABLE "unidadesMedida"`);
        await queryRunner.query(`DROP TABLE "insumos"`);
        await queryRunner.query(`DROP TABLE "lotes"`);
        await queryRunner.query(`DROP TABLE "detalleInsumosServicio"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "diagnosticos"`);
        await queryRunner.query(`DROP TABLE "servicios"`);
        await queryRunner.query(`DROP TABLE "presupuestos"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}

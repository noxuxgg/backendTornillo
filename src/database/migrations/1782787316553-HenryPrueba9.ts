import { MigrationInterface, QueryRunner } from "typeorm";

export class HenryPrueba91782787316553 implements MigrationInterface {
    name = 'HenryPrueba91782787316553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pagos" ADD CONSTRAINT "UQ_ed9154cd29b9526d57cfbf85e26" UNIQUE ("servicioId")`);
        await queryRunner.query(`ALTER TABLE "pagos" ALTER COLUMN "montoAdelanto" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pagos" ALTER COLUMN "montoAdelanto" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "pagos" ALTER COLUMN "saldoPendiente" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pagos" DROP COLUMN "metodoPago"`);
        await queryRunner.query(`ALTER TABLE "pagos" ADD "metodoPago" character varying`);
        await queryRunner.query(`ALTER TABLE "facturas" ADD CONSTRAINT "UQ_d7f60fc6f9330d093247dddd337" UNIQUE ("servicioId")`);
        await queryRunner.query(`ALTER TABLE "facturas" DROP COLUMN "numeroFactura"`);
        await queryRunner.query(`ALTER TABLE "facturas" ADD "numeroFactura" character varying`);
        await queryRunner.query(`ALTER TABLE "facturas" ALTER COLUMN "fechaEmision" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "facturas" ALTER COLUMN "fechaEmision" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "facturas" ALTER COLUMN "monto" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "facturas" DROP COLUMN "nit"`);
        await queryRunner.query(`ALTER TABLE "facturas" ADD "nit" character varying`);
        await queryRunner.query(`ALTER TABLE "facturas" DROP COLUMN "razonSocial"`);
        await queryRunner.query(`ALTER TABLE "facturas" ADD "razonSocial" character varying`);
        await queryRunner.query(`ALTER TABLE "categorias" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categorias" ADD "nombre" character varying`);
        await queryRunner.query(`ALTER TABLE "categorias" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "categorias" ADD "descripcion" character varying`);
        await queryRunner.query(`ALTER TABLE "proveedores" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "proveedores" ADD "nombre" character varying`);
        await queryRunner.query(`ALTER TABLE "proveedores" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "proveedores" ADD "telefono" character varying`);
        await queryRunner.query(`ALTER TABLE "proveedores" DROP COLUMN "direccion"`);
        await queryRunner.query(`ALTER TABLE "proveedores" ADD "direccion" character varying`);
        await queryRunner.query(`ALTER TABLE "proveedores" DROP COLUMN "tipoProveedor"`);
        await queryRunner.query(`ALTER TABLE "proveedores" ADD "tipoProveedor" character varying`);
        await queryRunner.query(`ALTER TABLE "compras" ALTER COLUMN "fechaCompra" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "compras" ALTER COLUMN "fechaCompra" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "compras" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "compras" ADD "estado" character varying`);
        await queryRunner.query(`ALTER TABLE "unidadesMedida" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "unidadesMedida" ADD "nombre" character varying`);
        await queryRunner.query(`ALTER TABLE "unidadesMedida" DROP COLUMN "abreviacion"`);
        await queryRunner.query(`ALTER TABLE "unidadesMedida" ADD "abreviacion" character varying`);
        await queryRunner.query(`ALTER TABLE "insumos" DROP COLUMN "codigoBase"`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD "codigoBase" character varying`);
        await queryRunner.query(`ALTER TABLE "insumos" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD "nombre" character varying`);
        await queryRunner.query(`ALTER TABLE "insumos" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD "descripcion" character varying`);
        await queryRunner.query(`ALTER TABLE "lotes" DROP COLUMN "codigoLote"`);
        await queryRunner.query(`ALTER TABLE "lotes" ADD "codigoLote" character varying`);
        await queryRunner.query(`ALTER TABLE "lotes" ALTER COLUMN "fechaIngreso" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lotes" ALTER COLUMN "fechaIngreso" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "pagos" ADD CONSTRAINT "FK_ed9154cd29b9526d57cfbf85e26" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "facturas" ADD CONSTRAINT "FK_d7f60fc6f9330d093247dddd337" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalleCompras" ADD CONSTRAINT "FK_584d426043ea623682b4dec89b9" FOREIGN KEY ("insumoId") REFERENCES "insumos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalleInsumosServicio" ADD CONSTRAINT "FK_897cbc2f428840045e4e48410c5" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalleInsumosServicio" DROP CONSTRAINT "FK_897cbc2f428840045e4e48410c5"`);
        await queryRunner.query(`ALTER TABLE "detalleCompras" DROP CONSTRAINT "FK_584d426043ea623682b4dec89b9"`);
        await queryRunner.query(`ALTER TABLE "facturas" DROP CONSTRAINT "FK_d7f60fc6f9330d093247dddd337"`);
        await queryRunner.query(`ALTER TABLE "pagos" DROP CONSTRAINT "FK_ed9154cd29b9526d57cfbf85e26"`);
        await queryRunner.query(`ALTER TABLE "lotes" ALTER COLUMN "fechaIngreso" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lotes" ALTER COLUMN "fechaIngreso" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lotes" DROP COLUMN "codigoLote"`);
        await queryRunner.query(`ALTER TABLE "lotes" ADD "codigoLote" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "insumos" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD "descripcion" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "insumos" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD "nombre" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "insumos" DROP COLUMN "codigoBase"`);
        await queryRunner.query(`ALTER TABLE "insumos" ADD "codigoBase" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "unidadesMedida" DROP COLUMN "abreviacion"`);
        await queryRunner.query(`ALTER TABLE "unidadesMedida" ADD "abreviacion" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "unidadesMedida" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "unidadesMedida" ADD "nombre" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "compras" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "compras" ADD "estado" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "compras" ALTER COLUMN "fechaCompra" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "compras" ALTER COLUMN "fechaCompra" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "proveedores" DROP COLUMN "tipoProveedor"`);
        await queryRunner.query(`ALTER TABLE "proveedores" ADD "tipoProveedor" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "proveedores" DROP COLUMN "direccion"`);
        await queryRunner.query(`ALTER TABLE "proveedores" ADD "direccion" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "proveedores" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "proveedores" ADD "telefono" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "proveedores" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "proveedores" ADD "nombre" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categorias" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "categorias" ADD "descripcion" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "categorias" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categorias" ADD "nombre" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "facturas" DROP COLUMN "razonSocial"`);
        await queryRunner.query(`ALTER TABLE "facturas" ADD "razonSocial" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "facturas" DROP COLUMN "nit"`);
        await queryRunner.query(`ALTER TABLE "facturas" ADD "nit" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "facturas" ALTER COLUMN "monto" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "facturas" ALTER COLUMN "fechaEmision" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "facturas" ALTER COLUMN "fechaEmision" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "facturas" DROP COLUMN "numeroFactura"`);
        await queryRunner.query(`ALTER TABLE "facturas" ADD "numeroFactura" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "facturas" DROP CONSTRAINT "UQ_d7f60fc6f9330d093247dddd337"`);
        await queryRunner.query(`ALTER TABLE "pagos" DROP COLUMN "metodoPago"`);
        await queryRunner.query(`ALTER TABLE "pagos" ADD "metodoPago" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pagos" ALTER COLUMN "saldoPendiente" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pagos" ALTER COLUMN "montoAdelanto" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "pagos" ALTER COLUMN "montoAdelanto" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pagos" DROP CONSTRAINT "UQ_ed9154cd29b9526d57cfbf85e26"`);
    }

}

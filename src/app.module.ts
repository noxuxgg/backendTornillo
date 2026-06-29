import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './modules/roles/roles.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ElectrodomesticosModule } from './modules/electrodomesticos/electrodomesticos.module';
import { DiagnosticosModule } from './modules/diagnosticos/diagnosticos.module';
import { AuthModule } from './modules/auth/auth.module';
import { ServiciosModule } from './modules/ordenes/servicios/servicios.module';
import { PresupuestosModule } from './modules/ordenes/presupuestos/presupuestos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { UnidadesMedidaModule } from './modules/unidades-medida/unidades-medida.module';
import { ProveedoresModule } from './modules/proveedores/proveedores.module';
import { DetalleComprasModule } from './modules/detalle-compras/detalle-compras.module';
import { InsumosModule } from './modules/insumos/insumos.module';
import { ComprasModule } from './modules/compras/compras.module';
import { PagosModule } from './modules/pagos/pagos.module';
import { FacturasModule } from './modules/facturas/facturas.module';
import { DetalleInsumosServicioModule } from './modules/detalle-insumos-servicio/detalle-insumos-servicio.module';
import { LotesModule } from './modules/lotes/lotes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5437,
      username: 'postgres',
      password: 'postgresql',
      database: 'dbTornillo',
      entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    RolesModule,
    UsuariosModule,
    ElectrodomesticosModule,
    DiagnosticosModule,
    AuthModule,
    ServiciosModule,
    PresupuestosModule,
    CategoriasModule,
    UnidadesMedidaModule,
    ProveedoresModule,
    DetalleComprasModule,
    InsumosModule,
    LotesModule,
    ComprasModule,
    PagosModule,
    FacturasModule,
    DetalleInsumosServicioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
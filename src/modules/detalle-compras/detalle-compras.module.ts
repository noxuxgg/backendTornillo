import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { DetalleComprasService } from './detalle-compras.service';
import { DetalleComprasController } from './detalle-compras.controller';
import { DetalleCompra } from './entities/detalle-compra.entity'; 

@Module({
  imports: [ TypeOrmModule.forFeature([DetalleCompra]), ],
  controllers: [DetalleComprasController],
  providers: [DetalleComprasService],
  exports: [TypeOrmModule], 
})
export class DetalleComprasModule {}
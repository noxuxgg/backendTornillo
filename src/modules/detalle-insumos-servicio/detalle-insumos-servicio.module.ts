import { Module } from '@nestjs/common';
import { DetalleInsumosServicioService } from './detalle-insumos-servicio.service';
import { DetalleInsumosServicioController } from './detalle-insumos-servicio.controller';

@Module({
  controllers: [DetalleInsumosServicioController],
  providers: [DetalleInsumosServicioService],
})
export class DetalleInsumosServicioModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleInsumosServicioService } from './detalle-insumos-servicio.service';
import { DetalleInsumosServicioController } from './detalle-insumos-servicio.controller';
import { DetalleInsumosServicio } from './entities/detalle-insumos-servicio.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DetalleInsumosServicio]),
  ],
  controllers: [DetalleInsumosServicioController],
  providers: [DetalleInsumosServicioService],
})
export class DetalleInsumosServicioModule {}
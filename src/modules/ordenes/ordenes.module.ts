import { Module } from '@nestjs/common';
import { ServiciosModule } from './servicios/servicios.module';
import { PresupuestosModule } from './presupuestos/presupuestos.module';

@Module({
  imports: [ServiciosModule, PresupuestosModule]
})
export class OrdenesModule {}

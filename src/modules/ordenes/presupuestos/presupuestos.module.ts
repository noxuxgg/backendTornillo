import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PresupuestosService} from './presupuestos.service';
import {PresupuestosController} from './presupuestos.controller';
import {Presupuesto} from './entities/presupuesto.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Presupuesto])],
  controllers:[PresupuestosController],
  providers:[PresupuestosService]
})
export class PresupuestosModule {}
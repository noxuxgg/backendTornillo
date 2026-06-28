import { Module } from '@nestjs/common';
import { ElectrodomesticosService } from './electrodomesticos.service';
import { ElectrodomesticosController } from './electrodomesticos.controller';

@Module({
  controllers: [ElectrodomesticosController],
  providers: [ElectrodomesticosService],
})
export class ElectrodomesticosModule {}

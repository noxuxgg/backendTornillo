import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElectrodomesticosService } from './electrodomesticos.service';
import { ElectrodomesticosController } from './electrodomesticos.controller';
import { Electrodomestico } from './entities/electrodomestico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Electrodomestico])],
  controllers: [ElectrodomesticosController],
  providers: [ElectrodomesticosService],
})
export class ElectrodomesticosModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadesMedidaController } from './unidades-medida.controller';
import { UnidadesMedidaService } from './unidades-medida.service';
import { UnidadMedida } from './entities/unidades-medida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnidadMedida])],
  controllers: [UnidadesMedidaController],
  providers: [UnidadesMedidaService],
  exports: [TypeOrmModule]
})
export class UnidadesMedidaModule {}
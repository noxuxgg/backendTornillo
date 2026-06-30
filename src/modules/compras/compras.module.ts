import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compra])],
  controllers: [ComprasController],
  providers: [ComprasService],
  exports: [TypeOrmModule]
})
export class ComprasModule {}
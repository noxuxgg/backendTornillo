import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- Importación necesaria
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { Compra } from './entities/compra.entity'; // <-- Tu entidad mapeada

@Module({
  imports: [ TypeOrmModule.forFeature([Compra]), ],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule {}
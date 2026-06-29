import { PartialType } from '@nestjs/swagger';
import { DetalleInsumosServicio } from '../entities/detalle-insumos-servicio.entity';
import { CreateInsumoDto } from '../../insumos/dto/create-insumo.dto';
import { CreateDetalleInsumoServicioDto } from './create-detalle-insumos-servicio.dto';

export class UpdateDetalleInsumosServicioDto extends PartialType(CreateDetalleInsumoServicioDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateDetalleInsumosServicioDto } from './create-detalle-insumos-servicio.dto';

export class UpdateDetalleInsumosServicioDto extends PartialType(CreateDetalleInsumosServicioDto) {}

import { Injectable } from '@nestjs/common';
import { CreateDetalleInsumosServicioDto } from './dto/create-detalle-insumos-servicio.dto';
import { UpdateDetalleInsumosServicioDto } from './dto/update-detalle-insumos-servicio.dto';

@Injectable()
export class DetalleInsumosServicioService {
  create(createDetalleInsumosServicioDto: CreateDetalleInsumosServicioDto) {
    return 'This action adds a new detalleInsumosServicio';
  }

  findAll() {
    return `This action returns all detalleInsumosServicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleInsumosServicio`;
  }

  update(id: number, updateDetalleInsumosServicioDto: UpdateDetalleInsumosServicioDto) {
    return `This action updates a #${id} detalleInsumosServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleInsumosServicio`;
  }
}

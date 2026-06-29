import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleCompra } from './entities/detalle-compra.entity';
import { CreateDetalleCompraDto } from './dto/create-detalle-compra.dto';

@Injectable()
export class DetalleComprasService {
  constructor(
    @InjectRepository(DetalleCompra)
    private readonly detalleRepository: Repository<DetalleCompra>,
  ) {}

  async create(createDetalleCompraDto: CreateDetalleCompraDto): Promise<DetalleCompra> {
    const nuevo = this.detalleRepository.create(createDetalleCompraDto);
    return await this.detalleRepository.save(nuevo);
  }

  async findAll(): Promise<DetalleCompra[]> {
    return await this.detalleRepository.find({ relations: ['compra', 'insumo'] });
  }

  async findOne(id: number): Promise<DetalleCompra> {
    const detalle = await this.detalleRepository.findOne({
      where: { id },
      relations: ['compra', 'insumo'],
    });
    if (!detalle) throw new NotFoundException(`Detalle de compra con ID ${id} no encontrado`);
    return detalle;
  }
}
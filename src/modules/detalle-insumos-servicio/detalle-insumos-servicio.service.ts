import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleInsumosServicio } from './entities/detalle-insumos-servicio.entity';
import { CreateDetalleInsumosServicioDto } from './dto/create-detalle-insumos-servicio.dto';

@Injectable()
export class DetalleInsumosServicioService {
  constructor(
    @InjectRepository(DetalleInsumosServicio)
    private readonly detalleInsumoServicioRepository: Repository<DetalleInsumosServicio>,
  ) {}

  async create(createDto: CreateDetalleInsumosServicioDto): Promise<DetalleInsumosServicio> {
    const nuevo = this.detalleInsumoServicioRepository.create(createDto);
    return await this.detalleInsumoServicioRepository.save(nuevo);
  }

  async findAll(): Promise<DetalleInsumosServicio[]> {
    return await this.detalleInsumoServicioRepository.find({ relations: ['lote'] });
  }
}
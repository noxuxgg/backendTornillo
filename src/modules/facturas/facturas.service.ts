import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from './entities/factura.entity';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Injectable()
export class FacturasService {
  constructor(
    @InjectRepository(Factura)
    private readonly facturaRepository: Repository<Factura>,
  ) {}

  async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
    const nueva = this.facturaRepository.create(createFacturaDto);
    return await this.facturaRepository.save(nueva);
  }

  async findAll(): Promise<Factura[]> {
    return await this.facturaRepository.find();
  }

  async findOne(id: number): Promise<Factura> {
    const factura = await this.facturaRepository.findOneBy({ id });
    if (!factura) throw new NotFoundException(`Factura con ID ${id} no encontrado`);
    return factura;
  }

  async update(id: number, dto: UpdateFacturaDto): Promise<Factura> {
    const factura = await this.findOne(id);
    Object.assign(factura, dto);
    return await this.facturaRepository.save(factura);
  }

  async remove(id: number): Promise<Factura> {
    const factura = await this.findOne(id);
    return await this.facturaRepository.remove(factura);
  }
}
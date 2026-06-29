import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';
import { CreateCompraDto } from './dto/create-compra.dto';

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private readonly compraRepository: Repository<Compra>,
  ) {}

  async create(createCompraDto: CreateCompraDto): Promise<Compra> {
    const nueva = this.compraRepository.create(createCompraDto);
    return await this.compraRepository.save(nueva);
  }

  async findAll(): Promise<Compra[]> {
    return await this.compraRepository.find({ relations: ['proveedor'] });
  }

  async findOne(id: number): Promise<Compra> {
    const compra = await this.compraRepository.findOne({
      where: { id },
      relations: ['proveedor'],
    });
    if (!compra) throw new NotFoundException(`Compra con ID ${id} no encontrado`);
    return compra;
  }

  update(id: number, updateCompraDto: any) {
    return `Este método actualiza la compra con ID #${id}`;
  }

  remove(id: number) {
    return `Este método elimina la compra con ID #${id}`;
  }
}
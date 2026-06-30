import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Insumo } from './entities/insumo.entity';
import { CreateInsumoDto } from './dto/create-insumo.dto';

@Injectable()
export class InsumosService {
  constructor(
    @InjectRepository(Insumo)
    private readonly insumoRepository: Repository<Insumo>,
  ) {}

  async create(createInsumoDto: CreateInsumoDto): Promise<Insumo> {
    const nuevo = this.insumoRepository.create(createInsumoDto);
    return await this.insumoRepository.save(nuevo);
  }

  async findAll(): Promise<Insumo[]> {
    // Usamos relations para traer la info de categoría y unidad si lo necesitas en Bruno
    return await this.insumoRepository.find({ relations: ['categoria', 'unidadesMedida'] });
  }

  async findOne(id: number): Promise<Insumo> {
    const insumo = await this.insumoRepository.findOne({
      where: { id },
      relations: ['categoria', 'unidadMedida'],
    });
    if (!insumo) throw new NotFoundException(`Insumo con ID ${id} no encontrado`);
    return insumo;
  }

  update(id: number, updateInsumoDto: any) {
    return `Este método actualiza el insumo con ID #${id}`;
  }

  remove(id: number) {
    return `Este método elimina el insumo con ID #${id}`;
  }
}
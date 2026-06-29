import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lote } from './entities/lote.entity';
import { CreateLoteDto } from './dto/create-lote.dto';

@Injectable()
export class LotesService {
  constructor(
    @InjectRepository(Lote)
    private readonly loteRepository: Repository<Lote>,
  ) {}

  async create(createLoteDto: CreateLoteDto): Promise<Lote> {
    const nuevo = this.loteRepository.create(createLoteDto);
    return await this.loteRepository.save(nuevo);
  }

  async findAll(): Promise<Lote[]> {
    return await this.loteRepository.find({ relations: ['insumo'] });
  }

  async findOne(id: number): Promise<Lote> {
    const lote = await this.loteRepository.findOne({
      where: { id },
      relations: ['insumo'],
    });
    if (!lote) throw new NotFoundException(`Lote con ID ${id} no encontrado`);
    return lote;
  }

  update(id: number, updateLoteDto: any) {
    return `Este método actualiza el lote con ID #${id}`;
  }

  remove(id: number) {
    return `Este método elimina el lote con ID #${id}`;
  }
}
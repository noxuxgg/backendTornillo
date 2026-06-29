import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnidadesMedida } from './entities/unidades-medida.entity';
import { CreateUnidadesMedidaDto } from './dto/create-unidades-medida.dto';

@Injectable()
export class UnidadesMedidaService {
  constructor(
    @InjectRepository(UnidadesMedida)
    private readonly umRepository: Repository<UnidadesMedida>,
  ) {}

  async create(createUmDto: CreateUnidadesMedidaDto): Promise<UnidadesMedida> {
    const nueva = this.umRepository.create(createUmDto);
    return await this.umRepository.save(nueva);
  }

  async findAll(): Promise<UnidadesMedida[]> {
    return await this.umRepository.find();
  }

  async findOne(id: number): Promise<UnidadesMedida> {
    const um = await this.umRepository.findOneBy({ id });
    if (!um) throw new NotFoundException(`Unidad de Medida con ID ${id} no encontrada`);
    return um;
  }

  update(id: number, updateUnidadesMedidaDto: any) {
    return `Este método actualiza la unidad de medida con ID #${id}`;
  }

  remove(id: number) {
    return `Este método elimina la unidad de medida con ID #${id}`;
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnidadMedida } from './entities/unidades-medida.entity';
import { CreateUnidadesMedidaDto } from './dto/create-unidades-medida.dto';

@Injectable()
export class UnidadesMedidaService {
  constructor(
    @InjectRepository(UnidadMedida)
    private readonly umRepository: Repository<UnidadMedida>,
  ) {}

  async create(createUmDto: CreateUnidadesMedidaDto): Promise<UnidadMedida> {
    const nueva = this.umRepository.create(createUmDto);
    return await this.umRepository.save(nueva);
  }

  async findAll(): Promise<UnidadMedida[]> {
    return await this.umRepository.find();
  }

  async findOne(id: number): Promise<UnidadMedida> {
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
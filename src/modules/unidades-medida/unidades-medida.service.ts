import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnidadMedida } from './entities/unidades-medida.entity';
import { CreateUnidadesMedidaDto } from './dto/create-unidades-medida.dto';
import { UpdateUnidadesMedidaDto } from './dto/update-unidades-medida.dto';

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
  async update(id: number, updateDto: UpdateUnidadesMedidaDto) {
      // Usamos umRepository (el nombre definido en el constructor)
      await this.umRepository.update(id, updateDto);
      return await this.umRepository.findOneBy({ id }); 
    }

  async remove(id: number) {
    // 1. Verificamos que exista antes de eliminar
      const um = await this.findOne(id); 
      // 2. Eliminamos
      await this.umRepository.remove(um);
      // 3. Retornamos algo vacío o confirmación (Angular ahora no fallará al parsear)
      return { mensaje: 'Eliminado correctamente' }; 
  }
}
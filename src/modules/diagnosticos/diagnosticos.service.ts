import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diagnostico } from './entities/diagnostico.entity';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';

@Injectable()
export class DiagnosticosService {
  constructor(
    @InjectRepository(Diagnostico)
    private readonly repo: Repository<Diagnostico>,
  ) { }

  async create(dto: CreateDiagnosticoDto): Promise<Diagnostico> {
    const diagnostic = this.repo.create(dto);
    return await this.repo.save(diagnostic);
  }

  async findAll(): Promise<Diagnostico[]> {
    return await this.repo.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Diagnostico> {
    const diagnostic = await this.repo.findOne({ where: { id }, relations: ['usuario'] });
    if (!diagnostic) throw new NotFoundException(`Diagnóstico con ID ${id} no encontrado`);
    return diagnostic;
  }

  async update(id: number, dto: UpdateDiagnosticoDto): Promise<Diagnostico> {
    const item = await this.findOne(id);
    if (dto.usuarioId !== undefined) {
      item.usuarioId = dto.usuarioId;
      (item as any).usuario = null;
    }
    const { usuarioId, ...rest } = dto;
    this.repo.merge(item, rest);

    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const diagnostic = await this.findOne(id);
    await this.repo.remove(diagnostic);
  }
}
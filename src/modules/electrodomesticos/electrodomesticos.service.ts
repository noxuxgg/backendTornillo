import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Electrodomestico } from './entities/electrodomestico.entity';
import { CreateElectrodomesticoDto } from './dto/create-electrodomestico.dto';
import { UpdateElectrodomesticoDto } from './dto/update-electrodomestico.dto';

@Injectable()
export class ElectrodomesticosService {
  constructor(
    @InjectRepository(Electrodomestico)
    private readonly repo: Repository<Electrodomestico>,
  ) { }

  async create(dto: CreateElectrodomesticoDto): Promise<Electrodomestico> {
    const item = this.repo.create(dto);
    return await this.repo.save(item);
  }

  async findAll(): Promise<Electrodomestico[]> {
    return await this.repo.find({ relations: ['client'] });
  }

  async findOne(id: number): Promise<Electrodomestico> {
    const item = await this.repo.findOne({ where: { id }, relations: ['client'] });
    if (!item) throw new NotFoundException(`Electrodoméstico con ID ${id} no encontrado`);
    return item;
  }

  async update(id: number, dto: UpdateElectrodomesticoDto): Promise<Electrodomestico> {
    const item = await this.findOne(id);

    // 1. Si viene un clientId, actualizamos la columna directamente
    if (dto.clientId !== undefined) {
      item.clientId = dto.clientId;
      // Esto es clave: al asignar el ID, eliminamos la relación cargada
      // para obligar a TypeORM a recalcularla basándose en el nuevo ID.
      (item as any).client = null;
    }

    // 2. Aplicamos el resto de los cambios
    const { clientId, ...rest } = dto;
    this.repo.merge(item, rest);

    // 3. Guardamos
    return await this.repo.save(item);
  }


  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}
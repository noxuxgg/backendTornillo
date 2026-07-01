import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './entities/proveedore.entity';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepository: Repository<Proveedor>,
  ) {}

  async create(createProveedorDto: CreateProveedorDto): Promise<Proveedor> {
    const nuevo = this.proveedorRepository.create(createProveedorDto);
    return await this.proveedorRepository.save(nuevo);
  }

  async findAll(): Promise<Proveedor[]> {
    return await this.proveedorRepository.find();
  }

  async findOne(id: number): Promise<Proveedor> {
    const proveedor = await this.proveedorRepository.findOneBy({ id });
    if (!proveedor) throw new NotFoundException(`Proveedor con ID ${id} no encontrado`);
    return proveedor;
  }

  async update(id: number, dto: UpdateProveedorDto): Promise<Proveedor> {
    const proveedor = await this.findOne(id);
    Object.assign(proveedor, dto);
    return await this.proveedorRepository.save(proveedor);
  }

  async remove(id: number): Promise<Proveedor> {
    const proveedor = await this.findOne(id);
    return await this.proveedorRepository.remove(proveedor);
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from './entities/pago.entity';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

@Injectable()
export class PagosService {
  constructor(
    @InjectRepository(Pago)
    private readonly pagoRepository: Repository<Pago>,
  ) {}

  async create(createPagoDto: CreatePagoDto): Promise<Pago> {
    const nuevo = this.pagoRepository.create(createPagoDto);
    return await this.pagoRepository.save(nuevo);
  }

  async findAll(): Promise<Pago[]> {
    return await this.pagoRepository.find();
  }

  async findOne(id: number): Promise<Pago> {
    const pago = await this.pagoRepository.findOneBy({ id });
    if (!pago) throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    return pago;
  }

  async update(id: number, dto: UpdatePagoDto): Promise<Pago> {
    const pago = await this.findOne(id);
    Object.assign(pago, dto);
    return await this.pagoRepository.save(pago);
  }

  async remove(id: number): Promise<Pago> {
    const pago = await this.findOne(id);
    return await this.pagoRepository.remove(pago);
  }
}
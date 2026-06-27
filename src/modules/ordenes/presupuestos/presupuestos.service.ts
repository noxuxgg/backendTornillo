import {Injectable,NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Presupuesto} from './entities/presupuesto.entity';
import {CreatePresupuestoDto} from './dto/create-presupuesto.dto';
import {UpdatePresupuestoDto} from './dto/update-presupuesto.dto';

@Injectable()
export class PresupuestosService {
  constructor(
    @InjectRepository(Presupuesto)
    private readonly presRepo:Repository<Presupuesto>,
  ) {}

  async create(createPresupuestoDto:CreatePresupuestoDto):Promise<Presupuesto> {
    const nuevo=this.presRepo.create(createPresupuestoDto);
    return await this.presRepo.save(nuevo);
  }

  async findAll():Promise<Presupuesto[]> {
    return await this.presRepo.find({relations:['servicio']});
  }

  async findOne(id:number):Promise<Presupuesto> {
    const reg=await this.presRepo.findOne({where:{id},relations:['servicio']});
    if(!reg) throw new NotFoundException(`Presupuesto #${id} no encontrado`);
    return reg;
  }

  async update(id:number,updatePresupuestoDto:UpdatePresupuestoDto):Promise<Presupuesto> {
    const reg=await this.findOne(id);
    const mod=this.presRepo.merge(reg,updatePresupuestoDto);
    return await this.presRepo.save(mod);
  }

  async remove(id:number):Promise<void> {
    const reg=await this.findOne(id);
    await this.presRepo.remove(reg);
  }
}
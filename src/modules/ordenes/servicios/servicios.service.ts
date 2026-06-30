import {Injectable,NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Servicio} from './entities/servicio.entity';
import {CreateServicioDto} from './dto/create-servicio.dto';
import {UpdateServicioDto} from './dto/update-servicio.dto';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servRepo:Repository<Servicio>,
  ) {}

  async create(createServicioDto:CreateServicioDto):Promise<Servicio> {
    const nuevo=this.servRepo.create(createServicioDto);
    return await this.servRepo.save(nuevo);
  }

  async findAll():Promise<Servicio[]> {
    return await this.servRepo.find({
      relations:['cliente','tecnico','electrodomestico']
    });
  }

  async findOne(id:number):Promise<Servicio> {
    const reg=await this.servRepo.findOne({
      where:{id},
      relations:['cliente','tecnico','electrodomestico']
    });
    if(!reg) throw new NotFoundException(`Servicio #${id} no encontrado`);
    return reg;
  }

  async update(id:number,updateServicioDto:UpdateServicioDto):Promise<Servicio> {
    const reg=await this.findOne(id);
    const mod=this.servRepo.merge(reg,updateServicioDto);
    return await this.servRepo.save(mod);
  }

  async remove(id:number):Promise<void> {
    const reg=await this.findOne(id); // Esto sigue validando que el servicio exista (si no, lanza 404)
  await this.servRepo.delete(id);
  }
}
import { Injectable } from '@nestjs/common';
import { CreateElectrodomesticoDto } from './dto/create-electrodomestico.dto';
import { UpdateElectrodomesticoDto } from './dto/update-electrodomestico.dto';

@Injectable()
export class ElectrodomesticosService {
  create(createElectrodomesticoDto: CreateElectrodomesticoDto) {
    return 'This action adds a new electrodomestico';
  }

  findAll() {
    return `This action returns all electrodomesticos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} electrodomestico`;
  }

  update(id: number, updateElectrodomesticoDto: UpdateElectrodomesticoDto) {
    return `This action updates a #${id} electrodomestico`;
  }

  remove(id: number) {
    return `This action removes a #${id} electrodomestico`;
  }
}

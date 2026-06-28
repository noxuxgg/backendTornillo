import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElectrodomesticosService } from './electrodomesticos.service';
import { CreateElectrodomesticoDto } from './dto/create-electrodomestico.dto';
import { UpdateElectrodomesticoDto } from './dto/update-electrodomestico.dto';

@Controller('electrodomesticos')
export class ElectrodomesticosController {
  constructor(private readonly electrodomesticosService: ElectrodomesticosService) {}

  @Post()
  create(@Body() createElectrodomesticoDto: CreateElectrodomesticoDto) {
    return this.electrodomesticosService.create(createElectrodomesticoDto);
  }

  @Get()
  findAll() {
    return this.electrodomesticosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.electrodomesticosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElectrodomesticoDto: UpdateElectrodomesticoDto) {
    return this.electrodomesticosService.update(+id, updateElectrodomesticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.electrodomesticosService.remove(+id);
  }
}

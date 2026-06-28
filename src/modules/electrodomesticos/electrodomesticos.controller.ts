import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ElectrodomesticosService } from './electrodomesticos.service';
import { CreateElectrodomesticoDto } from './dto/create-electrodomestico.dto';
import { UpdateElectrodomesticoDto } from './dto/update-electrodomestico.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('electrodomesticos')
@UseGuards(JwtAuthGuard)
export class ElectrodomesticosController {
  constructor(private readonly service: ElectrodomesticosService) {}

  @Post()
  create(@Body() createDto: CreateElectrodomesticoDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateElectrodomesticoDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
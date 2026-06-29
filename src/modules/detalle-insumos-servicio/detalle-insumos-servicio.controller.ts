import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleInsumosServicioService } from './detalle-insumos-servicio.service';
import { CreateDetalleInsumosServicioDto } from './dto/create-detalle-insumos-servicio.dto';
import { UpdateDetalleInsumosServicioDto } from './dto/update-detalle-insumos-servicio.dto';

@Controller('detalle-insumos-servicio')
export class DetalleInsumosServicioController {
  constructor(private readonly detalleInsumosServicioService: DetalleInsumosServicioService) {}

  @Post()
  create(@Body() createDetalleInsumosServicioDto: CreateDetalleInsumosServicioDto) {
    return this.detalleInsumosServicioService.create(createDetalleInsumosServicioDto);
  }

  @Get()
  findAll() {
    return this.detalleInsumosServicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleInsumosServicioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleInsumosServicioDto: UpdateDetalleInsumosServicioDto) {
    return this.detalleInsumosServicioService.update(+id, updateDetalleInsumosServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleInsumosServicioService.remove(+id);
  }
}

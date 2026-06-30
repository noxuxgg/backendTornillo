import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DetalleInsumosServicioService } from './detalle-insumos-servicio.service';
import { CreateDetalleInsumoServicioDto } from './dto/create-detalle-insumos-servicio.dto';
@Controller('detalle-insumos-servicio')
export class DetalleInsumosServicioController {
  constructor(private readonly detalleInsumosServicioService: DetalleInsumosServicioService) {}

  @Post()
  create(@Body() createDto: CreateDetalleInsumoServicioDto) {
    return this.detalleInsumosServicioService.create(createDto);
  }

  @Get()
  findAll() {
    return this.detalleInsumosServicioService.findAll();
  }
}
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DetalleComprasService } from './detalle-compras.service';
import { CreateDetalleCompraDto } from './dto/create-detalle-compra.dto';

@Controller('detalle-compras')
export class DetalleComprasController {
  constructor(private readonly detalleComprasService: DetalleComprasService) {}

  @Post()
  create(@Body() createDetalleCompraDto: CreateDetalleCompraDto) {
    return this.detalleComprasService.create(createDetalleCompraDto);
  }

  @Get()
  findAll() {
    return this.detalleComprasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleComprasService.findOne(+id);
  }
}
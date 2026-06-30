import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateDetalleInsumoServicioDto {
  
  @IsNotEmpty()
  @IsNumber()
  servicioId: number;

  @IsNotEmpty()
  @IsNumber()
  loteId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  cantidadUtilizada: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  precioAplicado: number;
}
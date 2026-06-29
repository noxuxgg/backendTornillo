import { IsString, IsNotEmpty, IsInt, IsNumber, IsOptional, IsDateString, IsBoolean } from 'class-validator';

export class CreateDetalleInsumoServicioDto {
  @IsInt() @IsNotEmpty() servicioId: number;
  @IsInt() @IsNotEmpty() loteId: number;
  @IsNumber() @IsNotEmpty() cantidadUtilizada: number;
  @IsNumber() @IsNotEmpty() precioAplicado: number;
  @IsOptional() @IsDateString() createdAt?: string;
}
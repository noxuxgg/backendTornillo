import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateDetalleCompraDto {
  @IsInt() @IsNotEmpty() compraId: number;
  @IsInt() @IsNotEmpty() insumoId: number;
  @IsNumber() @IsNotEmpty() cantidad: number;
  @IsNumber() @IsNotEmpty() precioUnitario: number;
  @IsNumber() @IsNotEmpty() subtotal: number;
  
  @IsOptional() @IsDateString() createdAt?: string;
}
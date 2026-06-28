import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateElectrodomesticoDto {
  @IsInt()
  @IsNotEmpty()
  clientId: number;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsString()
  @IsNotEmpty()
  numeroSerie: string;

  @IsString()
  @IsOptional()
  observaciones?: string;
}
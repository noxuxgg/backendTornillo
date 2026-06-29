import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUnidadesMedidaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  abreviacion: string;
}
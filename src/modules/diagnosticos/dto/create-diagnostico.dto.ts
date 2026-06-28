import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateDiagnosticoDto {
  @IsInt()
  @IsOptional()
  servicioId?: number;

  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @IsString()
  @IsNotEmpty()
  tipoDiagnostico: string;

  @IsString()
  @IsNotEmpty()
  descripcionDiagnostico: string;
}
import { IsString, IsNotEmpty, IsInt, IsOptional, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsInt()
  @IsNotEmpty()
  roleId: number;

  @IsString()
  @IsNotEmpty()
  ci: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
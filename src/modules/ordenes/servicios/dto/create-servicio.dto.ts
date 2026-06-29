import {IsDateString,IsString,IsBoolean,IsNumber,IsOptional} from 'class-validator';

export class CreateServicioDto {
  @IsDateString()
  @IsOptional()
  fechaProgramada?:string;

  @IsString()
  @IsOptional()
  duracionEstimada?:string;

  @IsString()
  @IsOptional()
  duracionReal?:string;

  @IsBoolean()
  @IsOptional()
  estDomicilio?:boolean;

  @IsString()
  @IsOptional()
  direccionServicio?:string;

  @IsNumber()
  @IsOptional()
  recargoDomicilio?:number;

  @IsString()
  @IsOptional()
  estado?:string;

  // NUEVOS VALIDADORES
  @IsNumber()
  costoAproximado:number;

  @IsNumber()
  adelanto:number;

  @IsOptional()
  @IsNumber()
  electrodomesticoId?:number;
}
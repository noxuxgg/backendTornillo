import {IsNumber,IsBoolean,IsOptional} from 'class-validator';

export class CreatePresupuestoDto {
  @IsNumber()
  servicioId:number;

  @IsNumber()
  costoManoObra:number;
  
  @IsNumber()
  costoRepuestos:number;

  @IsNumber()
  total:number;

  @IsBoolean()
  @IsOptional()
  aprobado?:boolean;
}

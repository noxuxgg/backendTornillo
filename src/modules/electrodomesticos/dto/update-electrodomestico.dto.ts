import { PartialType } from '@nestjs/mapped-types';
import { CreateElectrodomesticoDto } from './create-electrodomestico.dto';

export class UpdateElectrodomesticoDto extends PartialType(CreateElectrodomesticoDto) {}
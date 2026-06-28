import { PartialType } from '@nestjs/swagger';
import { CreateElectrodomesticoDto } from './create-electrodomestico.dto';

export class UpdateElectrodomesticoDto extends PartialType(CreateElectrodomesticoDto) {}

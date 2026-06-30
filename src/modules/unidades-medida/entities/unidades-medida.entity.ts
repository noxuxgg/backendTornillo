// unidades-medida/entities/unidades-medida.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Insumo } from '../../insumos/entities/insumo.entity';

@Entity('unidadesMedida')
export class UnidadMedida {  // 👈 quita la 's'
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nombre: string;

  @Column({ nullable: true })
  abreviacion: string;

  @OneToMany(() => Insumo, (insumo) => insumo.unidadMedida)  // 👈 corregido
  insumos: Insumo[];
}
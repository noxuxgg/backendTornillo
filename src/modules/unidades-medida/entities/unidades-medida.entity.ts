import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Insumo } from '../../insumos/entities/insumo.entity';

@Entity('unidadesMedida')
export class UnidadesMedida {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 50 })
  abreviacion: string;

  @OneToMany(() => Insumo, (insumo) => insumo.unidadesMedida)
  insumos: Insumo[];
}
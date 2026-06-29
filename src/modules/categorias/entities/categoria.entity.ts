import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Insumo } from '../../insumos/entities/insumo.entity';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  descripcion: string;

  @OneToMany(() => Insumo, (insumo) => insumo.categoria)
  insumos: Insumo[];
}
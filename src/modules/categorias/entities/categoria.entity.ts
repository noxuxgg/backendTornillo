import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Insumo } from '../../insumos/entities/insumo.entity';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @OneToMany(() => Insumo, i => i.categoria)
  insumos: Insumo[];
}
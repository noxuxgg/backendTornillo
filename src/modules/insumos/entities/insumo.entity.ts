import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { UnidadesMedida } from '../../unidades-medida/entities/unidades-medida.entity';
import { Lote } from '../../lotes/entities/lote.entity';

@Entity('insumos')
export class Insumo {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'integer' })
  categoriaId: number;

  @Column({ type: 'integer' })
  unidadMedidadId: number;

  @Column({ type: 'varchar', length: 100 })
  codigoBase: string;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  descripcion: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.insumos)
  @JoinColumn({ name: 'categoriaId' })
  categoria: Categoria;

  @ManyToOne(() => UnidadesMedida, (um) => um.insumos)
  @JoinColumn({ name: 'unidadMedidadId' })
  unidadesMedida: UnidadesMedida;

  @OneToMany(() => Lote, (lote) => lote.insumo)
  lotes: Lote[];
}
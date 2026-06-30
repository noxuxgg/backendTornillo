import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { Lote } from '../../lotes/entities/lote.entity';
import { DetalleCompra } from '../../detalle-compras/entities/detalle-compra.entity';
import { UnidadMedida } from '../../unidades-medida/entities/unidades-medida.entity';

@Entity('insumos')
export class Insumo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoriaId: number;

  @Column()
  unidadMedidadId: number;

  @Column({ nullable: true })
  codigoBase: string;

  @Column({ nullable: true })
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @ManyToOne(() => Categoria, c => c.insumos)
  @JoinColumn({ name: 'categoriaId' })
  categoria: Categoria;

  @ManyToOne(() => UnidadMedida, u => u.insumos)
  @JoinColumn({ name: 'unidadMedidadId' })
  unidadMedida: UnidadMedida;

  @OneToMany(() => Lote, l => l.insumo)
  lotes: Lote[];

  @OneToMany(() => DetalleCompra, dc => dc.insumo)
  detalleCompras: DetalleCompra[];
}
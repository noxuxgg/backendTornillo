// lote/entities/lote.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Insumo } from '../../insumos/entities/insumo.entity';
import { DetalleInsumosServicio } from '../../detalle-insumos-servicio/entities/detalle-insumos-servicio.entity';

@Entity('lotes')
export class Lote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  insumoId: number;

  @Column({ nullable: true })
  codigoLote: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precioCompra: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioVentaSugerido: number;

  @Column('decimal', { precision: 10, scale: 2 })
  stockActual: number;

  @Column({ type: 'timestamp', nullable: true })
  fechaIngreso: Date;

  @ManyToOne(() => Insumo, (insumo) => insumo.lotes)
  @JoinColumn({ name: 'insumoId' })
  insumo: Insumo;

  @OneToMany(() => DetalleInsumosServicio, (detalle) => detalle.lote)
  detalleInsumosServicio: DetalleInsumosServicio[];  // 👈 este es el nombre real
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Insumo } from '../../insumos/entities/insumo.entity';
import { DetalleInsumosServicio } from '../../detalle-insumos-servicio/entities/detalle-insumos-servicio.entity';

@Entity('lotes')
export class Lote {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'integer' })
  insumoId: number;

  @Column({ type: 'varchar', length: 100 })
  codigoLote: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioCompra: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioVentaSugerido: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  stockActual: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaIngreso: Date;

  @ManyToOne(() => Insumo, (insumo) => insumo.lotes)
  @JoinColumn({ name: 'insumoId' })
  insumo: Insumo;

  @OneToMany(() => DetalleInsumosServicio, (dis) => dis.lote)
  detallesServicio: DetalleInsumosServicio[];
}
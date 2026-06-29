import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Compra } from '../../compras/entities/compra.entity';
import { Insumo } from '../../insumos/entities/insumo.entity';

@Entity('detalleCompras')
export class DetalleCompra {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'integer' })
  compraId: number;

  @Column({ type: 'integer' })
  insumoId: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioUnitario: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subtotal: number;

  // Relaciones ManyToOne hacia Compra e Insumo
  @ManyToOne(() => Compra, (compra) => compra.id)
  @JoinColumn({ name: 'compraId' })
  compra: Compra;

  @ManyToOne(() => Insumo, (insumo) => insumo.id)
  @JoinColumn({ name: 'insumoId' })
  insumo: Insumo;
}
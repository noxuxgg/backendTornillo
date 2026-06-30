import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Compra } from '../../compras/entities/compra.entity';
import { Insumo } from '../../insumos/entities/insumo.entity';

@Entity('detalleCompras')
export class DetalleCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  compraId: number;

  @Column()
  insumoId: number;

  @Column('decimal', { precision: 10, scale: 2 })
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioUnitario: number;

  @Column('decimal', { precision: 10, scale: 2 })
  subtotal: number;

  @ManyToOne(() => Compra, c => c.detalleCompras)
  @JoinColumn({ name: 'compraId' })
  compra: Compra;

  // ⚠️ Esta es la relación que faltaba en DBBeaver
  @ManyToOne(() => Insumo, i => i.detalleCompras)
  @JoinColumn({ name: 'insumoId' })
  insumo: Insumo;
}
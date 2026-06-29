import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Proveedor } from '../../proveedores/entities/proveedore.entity';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'integer' })
  proveedorId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaCompra: Date;

  @Column({ type: 'varchar', length: 50 })
  estado: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.compras)
  @JoinColumn({ name: 'proveedorId' })
  proveedor: Proveedor;

  @OneToMany(() => DetalleCompra, (detalle) => detalle.compra)
  detalles: DetalleCompra[];
}

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

  @ManyToOne(() => Compra, (compra) => compra.detalles)
  @JoinColumn({ name: 'compraId' })
  compra: Compra;
}
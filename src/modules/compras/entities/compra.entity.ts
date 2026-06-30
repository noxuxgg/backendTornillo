import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { DetalleCompra } from '../../detalle-compras/entities/detalle-compra.entity';
import { Proveedor } from '../../proveedores/entities/proveedore.entity';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  proveedorId: number;

  @Column({ type: 'timestamp', nullable: true })
  fechaCompra: Date;

  @Column({ nullable: true })
  estado: string;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @ManyToOne(() => Proveedor, p => p.compras)
  @JoinColumn({ name: 'proveedorId' })
  proveedor: Proveedor;

  @OneToMany(() => DetalleCompra, dc => dc.compra)
  detalleCompras: DetalleCompra[];
}
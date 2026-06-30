import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Servicio } from '../../ordenes/servicios/entities/servicio.entity';

@Entity('facturas')
export class Factura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  servicioId: number;

  @Column({ nullable: true })
  numeroFactura: string;

  @Column({ type: 'timestamp', nullable: true })
  fechaEmision: Date;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  monto: number;

  @Column({ nullable: true })
  nit: string;

  @Column({ nullable: true })
  razonSocial: string;

  @OneToOne(() => Servicio, (servicio) => servicio.factura)
  @JoinColumn({ name: 'servicioId' })
  servicio: Servicio;
}
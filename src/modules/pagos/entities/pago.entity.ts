import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Servicio } from '../../ordenes/servicios/entities/servicio.entity';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  servicioId: number;

  @Column('decimal', { precision: 10, scale: 2 })
  montoTotal: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  montoAdelanto: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  saldoPendiente: number;

  @Column({ nullable: true })
  metodoPago: string;

  @Column({ default: false })
  completado: boolean;

  @OneToOne(() => Servicio, (servicio) => servicio.pago)
  @JoinColumn({ name: 'servicioId' })
  servicio: Servicio;
}
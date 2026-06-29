import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'integer' })
  servicioId: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  montoTotal: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  montoAdelanto: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  saldoPendiente: number;

  @Column({ type: 'varchar', length: 100 })
  metodoPago: string;

  @Column({ type: 'boolean', default: false })
  completado: boolean;
}
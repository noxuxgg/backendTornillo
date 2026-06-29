import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('facturas')
export class Factura {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'integer' })
  servicioId: number;

  @Column({ type: 'varchar', length: 100 })
  numeroFactura: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaEmision: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monto: number;

  @Column({ type: 'varchar', length: 50 })
  nit: string;

  @Column({ type: 'varchar', length: 255 })
  razonSocial: string;
}
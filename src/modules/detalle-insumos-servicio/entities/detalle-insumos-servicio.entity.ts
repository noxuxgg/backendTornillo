import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Lote } from '../../lotes/entities/lote.entity';
import { Servicio } from '../../ordenes/servicios/entities/servicio.entity'; 
@Entity('detalleInsumosServicio')
export class DetalleInsumosServicio {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'integer' })
  servicioId: number; // Relación lógica compartida con el módulo del Dev 2

  @Column({ type: 'integer' })
  loteId: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cantidadUtilizada: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioAplicado: number;

  @ManyToOne(() => Lote, (lote) => lote.detalleInsumosServicio) // 👈 corregido
  @JoinColumn({ name: 'loteId' })
  lote: Lote;

  @ManyToOne(() => Servicio, (servicio) => servicio.detalleInsumosServicio)
  @JoinColumn({ name: 'servicioId' })
  servicio: Servicio;


}
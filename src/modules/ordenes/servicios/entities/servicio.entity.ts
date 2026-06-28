import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Presupuesto } from '../../presupuestos/entities/presupuesto.entity';
import { Diagnostico } from '../../../diagnosticos/entities/diagnostico.entity';

@Entity('servicios')
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', nullable: true })
  fechaProgramada: Date;

  @Column({ type: 'time', nullable: true })
  duracionEstimada: string;

  @Column({ type: 'time', nullable: true })
  duracionReal: string;

  @Column({ type: 'boolean', default: false })
  estDomicilio: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  direccionServicio: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  recargoDomicilio: number;

  @Column({ type: 'varchar', length: 50, default: 'Pendiente' })
  estado: string;

  @OneToMany(() => Presupuesto, presupuesto => presupuesto.servicio)
  presupuestos: Presupuesto[];

  @OneToMany(() => Diagnostico, (diagnostico) => diagnostico.servicio)
  diagnosticos: Diagnostico[];
}
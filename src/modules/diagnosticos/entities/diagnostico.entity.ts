import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Servicio } from '../../ordenes/servicios/entities/servicio.entity';

@Entity('diagnosticos')
export class Diagnostico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true, name: 'servicioId' })
  servicioId: number;

  @Column({ type: 'int', name: 'usuarioId' })
  usuarioId: number;

  @Column({ type: 'varchar', length: 255, name: 'tipoDiagnostico' })
  tipoDiagnostico: string;

  @Column({ type: 'text', name: 'descripcionDiagnostico' })
  descripcionDiagnostico: string;

  @Column({ type: 'timestamp', name: 'fechaRegistro', default: () => 'CURRENT_TIMESTAMP' })
  fechaRegistro: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.diagnosticos)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @ManyToOne(() => Servicio, (servicio) => servicio.diagnosticos)
  @JoinColumn({ name: 'servicioId' })
  servicio: Servicio;
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Servicio } from '../../ordenes/servicios/entities/servicio.entity';
@Entity('electrodomesticos')
export class Electrodomestico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'clientId' })
  clientId: number;

  @Column({ type: 'varchar', length: 255 })
  tipo: string;

  @Column({ type: 'varchar', length: 255 })
  marca: string;

  @Column({ type: 'varchar', length: 255 })
  modelo: string;

  @Column({ type: 'varchar', length: 255, name: 'numeroSerie' })
  numeroSerie: string;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'clientId' })
  client: Usuario;

  @OneToMany(()=>Servicio, (s)=>s.electrodomestico)
  servicios:Servicio[];
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Diagnostico } from '../../diagnosticos/entities/diagnostico.entity';
import { Servicio } from '../../ordenes/servicios/entities/servicio.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'roleId' })
  roleId: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  ci: string;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255 })
  apellido: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  telefono: string;

  @Column({ type: 'varchar', length: 255, default: '$2b$10$eImiTXuWVneM97Y7VGbPae3Z9p3I1f/6NWhfM2q0wN4eExXqI9SyC' })
  password: string;

  @ManyToOne(() => Role, (role) => role.usuarios)
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @OneToMany(() => Diagnostico, (diagnostico) => diagnostico.usuario)
  diagnosticos: Diagnostico[];

  @OneToMany(()=>Servicio,(servicio)=>servicio.cliente)
serviciosComoCliente:Servicio[];

  @OneToMany(()=>Servicio,(servicio)=>servicio.tecnico)
  serviciosComoTecnico:Servicio[];
}
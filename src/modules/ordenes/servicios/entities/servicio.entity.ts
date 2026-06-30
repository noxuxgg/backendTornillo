import { Entity, OneToOne, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Presupuesto } from '../../presupuestos/entities/presupuesto.entity';
import { Diagnostico } from '../../../diagnosticos/entities/diagnostico.entity';
import { Usuario } from '../../../usuarios/entities/usuario.entity';
import { Pago } from '../../../pagos/entities/pago.entity';
import { Factura } from '../../../facturas/entities/factura.entity';

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

  // 1. Relación con el Cliente
    @Column({nullable:true})
    clienteId:number;

    @ManyToOne(()=>Usuario,(usuario)=>usuario.serviciosComoCliente)
    @JoinColumn({name:'clienteId'})
    cliente:Usuario;

// 2. Relación con el Técnico
    @Column({nullable:true})
    tecnicoId:number;

@ManyToOne(()=>Usuario,(usuario)=>usuario.serviciosComoTecnico)
@JoinColumn({name:'tecnicoId'})
tecnico:Usuario;

  @OneToMany(() => Presupuesto, presupuesto => presupuesto.servicio)
  presupuestos: Presupuesto[];

  @OneToMany(() => Diagnostico, (diagnostico) => diagnostico.servicio)
  diagnosticos: Diagnostico[];

    @OneToOne(() => Pago, (pago) => pago.servicio)
  pago: Pago;

  @OneToOne(() => Factura, (factura) => factura.servicio)
  factura: Factura;
}
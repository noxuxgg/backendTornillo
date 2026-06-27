import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn} from 'typeorm';
import {Servicio} from '../../servicios/entities/servicio.entity';

@Entity('presupuestos')
export class Presupuesto {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({type:'integer'})
  servicioId:number;

  @Column({type:'decimal',precision:10,scale:2})
  costoManoObra:number;

  @Column({type:'decimal',precision:10,scale:2})
  costoRepuestos:number;

  @Column({type:'decimal',precision:10,scale:2})
  total:number;

  @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
  fechaRegistro:Date;

  @Column({type:'boolean',default:false})
  aprobado:boolean;

  @ManyToOne(()=>Servicio,servicio=>servicio.presupuestos)
  @JoinColumn({name:'servicioId'})
  servicio:Servicio;
}
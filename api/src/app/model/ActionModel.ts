import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Action')
export default class Action {
    @PrimaryGeneratedColumn('increment') 
    id: number

    @Column('varchar', { length: 40})
    action: string
}

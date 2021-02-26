import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Actions')
export default class Action {
    @PrimaryGeneratedColumn('increment') 
    id: number

    @Column('varchar', { length: 100})
    action: string
}

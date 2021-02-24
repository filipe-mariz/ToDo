import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Action from './ActionModel';

@Entity('User')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar', { length: 50})
    name: string

    @Column('varchar', { length: 10})
    userName: string

    @Column('varchar', { length: 50})
    password: string

    @OneToMany(() => Action, action => action.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'user_id' })
    action: Action[];
}
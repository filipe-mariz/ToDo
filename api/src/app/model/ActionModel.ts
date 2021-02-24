import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from './UserModel';

@Entity('Action')
export default class Action {
    @PrimaryGeneratedColumn('increment') 
    id: number

    @Column('varchar', { length: 40})
    action: string

    @ManyToOne(() => User, user => user.action)
    @JoinColumn({ name: 'user_id' })
    user: User;
}
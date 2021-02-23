import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
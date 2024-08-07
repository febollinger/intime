import { BeforeInsert, BeforeSoftRemove, BeforeUpdate, Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt, {getRounds}  from "bcrypt";

import { Task } from "./task.entity";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type:"varchar", length:60})
    name!:string;
    
    @Column({type:"varchar", unique:true})
    email!: string;

    @Column({type:"varchar"})
    password!: string;


    @Column({type:"date"})
    birthday!:string;

    @Column({type:"timestamp", default: () => 'CURRENT_TIMESTAMP'})
    created_at!:Date;

    @DeleteDateColumn()
    deletedDate!: Date;

    @OneToMany(() => Task, (task) => task.user)
    task!
    : Task[];

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)

    }
    
}
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from "bcrypt";

import { Task } from "./task.entity";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: "varchar", length: 50 })
    name!: string
    
    @Column({type:"varchar", unique:true})
    email!: string

    @Column({type:"varchar"})
    password!: string


    @Column({type:"date"})
    birthday_date!:string

    @CreateDateColumn({name: "created_at"})
    created_at!:Date

    @DeleteDateColumn()
    deleted_at!: Date

    @OneToMany(() => Task, (task) => task.user)
    tasks!: Task[]

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)

    }
    
}
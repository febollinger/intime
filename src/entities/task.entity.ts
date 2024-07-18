import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

export enum TaskProgress {
    NOTSTARTED = "Not started",
    INPROGRESS = "In progress",
    DONE = "Done",
}

@Entity("tasks")
export class Task{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type:"varchar", length:60})
    title!:string;
    
    @Column({type:"varchar", unique:true})
    description!: string;

    @Column({
        type: "enum",
        enum: TaskProgress,
        default: TaskProgress.NOTSTARTED,
    })
    Progress!: TaskProgress[]

    @Column({type:"timestamp"})
    created_at!:string

    @ManyToOne(() => User, (user) => user.task)
    user!: User

}
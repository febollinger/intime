import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({type:"varchar", length:50})
    title!:string;
    
    @Column({type:"varchar", length:150})
    description!: string;

    @Column({
        type: "enum",
        enum: TaskProgress,
        default: TaskProgress.NOTSTARTED,
    })
    Progress!: TaskProgress

    @CreateDateColumn()
    created_at!:Date;

    @DeleteDateColumn()
    deletedDate!: Date;

    @ManyToOne(() => User, (user) => user.tasks)
    user!: User

}
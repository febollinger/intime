import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Task } from "../entities/task.entity"

export const createTaskService = async (taskBody: any) => {
    const taskRepository: Repository<Task> = AppDataSource.getRepository(Task)

    const creatingTask = taskRepository.create({
        ...taskBody
    })

    return await taskRepository.save(creatingTask)
}

export const getTasksService = async () => {
    const taskRepository: Repository<Task> = AppDataSource.getRepository(Task)
    const gettingTask = await taskRepository.find()

    return gettingTask
}

export const editTaskService = async (taskId: number, taskBody: string) => {
    const taskRepository = await AppDataSource.createQueryBuilder()
    .update(Task)
    .set(taskBody)
    .where("id = :id", {id: taskId})
    .execute()
    
    return taskRepository
}

export const deleteTaskService = async (taskId: number) => {
    const taskRepository = await AppDataSource
    .getRepository(Task)
    .createQueryBuilder()
    .softDelete()
    .where("id = :id", {id: taskId})
    .execute()

    return taskRepository
}
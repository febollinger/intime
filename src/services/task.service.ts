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
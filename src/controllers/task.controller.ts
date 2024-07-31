import { Request, Response } from "express"
import { createTaskService, deleteTaskService, editTaskService, getTasksService } from "../services/task.service"

export const createTaskController =async (request: Request, response: Response) => {
    const taskBody = request.body
    const taskResp = await createTaskService(taskBody)

    return response.status(201).json(taskResp)

}

export const getTasksController = async (request: Request, response: Response) => {
    const getTasks = await getTasksService()

    return response.status(200).json(getTasks)
}

export const editTaskController = async (request: Request, response: Response) => {
    const taskId: number = Number(request.params.id)
    const taskBody = request.body
    const getTasks = await editTaskService(taskId, taskBody)

    return response.status(200).json(getTasks)
}

export const deleteTaskController = async (request: Request, response: Response) => {
    const taskId: number = Number(request.params.id)
    await deleteTaskService(taskId)
    
    return response.status(204)
}
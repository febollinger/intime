import { Request, Response } from "express"
import { createTaskService, getTasksService } from "../services/task.service"

export const createTaskController =async (request: Request, response: Response) => {
    const taskBody = request.body
    const taskResp = await createTaskService(taskBody)

    return response.status(201).json(taskResp)

}

export const getTasksController = async (request: Request, response: Response) => {
    const getTasks = await getTasksService()

    return response.status(200).json(getTasks)
}
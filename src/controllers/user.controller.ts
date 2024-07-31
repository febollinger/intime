import { Request, Response } from "express"
import { createUserService, deleteUserService, editUserService, getOneUserService, readUserService } from "../services/user.service"

export const createUserController = async (request: Request, response: Response): Promise<Response> => {
    const userReq = request.body
    const userResp = await createUserService(userReq)

    return response.status(201).json(userResp)

}

export const readUsersController = async (request: Request, response: Response): Promise<Response> => {
    const resp = await readUserService()

    return response.status(200).json(resp)

}

export const getOneUserController = async (request: Request, response: Response): Promise<Response> => {
    const userId: number = Number(request.params.id)
    const userResp = await getOneUserService(userId)


    return response.status(200).json(userResp)

}

export const editUserController = async (request: Request, response: Response): Promise<Response> => {
    const userId: number = Number(request.params.id)
    const userBody: string = request.body
    const userResp = await editUserService(userId, userBody)
    

    return response.status(200).json(userResp)
}

export const deleteUserController = async (request: Request, response: Response): Promise<Response> => {
    const userId: number = Number(request.params.id);
    const userResp = await deleteUserService(userId)

    return response.status(204)

}
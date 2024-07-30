import { Request, Response } from "express"
import { createUserService, getOneUserService, readUserService } from "../services/user.service"

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
    console.log(userId)
    const userResp = await getOneUserService(userId)
    console.log(userResp)

    return response.status(200).json(userResp)

}

export const editUserController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    

    return response

}

export const deleteUserController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    

    return response

}
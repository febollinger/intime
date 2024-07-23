import { Request, Response } from "express"
import { createUserService, readUserService } from "../services/user.service"

export const createUserController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    const clientResp = await createUserService(clientReq)

    return response.status(201).json(clientResp)

}

export const readUsersController = async (request: Request, response: Response): Promise<Response> => {
    const resp = await readUserService()

    return response.status(200).json(resp)

}

export const getOneUserController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    

    return response

}

export const editUserController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    

    return response

}

export const deleteUserController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    

    return response

}
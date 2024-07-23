import { Request, Response } from "express"
import { createClient } from "../services/client.service"

export const createClientController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    const clientResp = await createClient(clientReq)

    return response.status(201).json(clientResp)

}

export const readClientsController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    

    return response

}

export const getOneClientController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    

    return response

}

export const editClientController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    

    return response

}

export const deleteClientController = async (request: Request, response: Response): Promise<Response> => {
    const clientReq = request.body
    

    return response

}
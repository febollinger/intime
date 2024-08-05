import {Request, Response} from "express";
import { loginService } from "../services/login.service";

export const loginController = async (req: Request, resp: Response) => {
    const getLogin = req.body
    console.log(getLogin)
    const loginResponse = await loginService(getLogin)

    return resp.json({
        
    })
}
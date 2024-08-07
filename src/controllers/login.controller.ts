import {Request, Response} from "express";
import { loginService } from "../services/login.service";

export const loginController = async (req: Request, resp: Response) => {
    const getLogin = req.body
    const token = await loginService(getLogin)

    return resp.json({
        token
    })
}
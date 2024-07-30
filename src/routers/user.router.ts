import { Router } from "express";
import { createUserController, getOneUserController, readUsersController } from "../controllers/user.controller";


export const clientRouter = Router()

clientRouter.post("", createUserController)
clientRouter.get("", readUsersController)
clientRouter.get("/:id", getOneUserController)

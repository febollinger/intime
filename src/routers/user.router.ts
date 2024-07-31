import { Router } from "express";
import { createUserController, editUserController, getOneUserController, readUsersController } from "../controllers/user.controller";


export const clientRouter = Router()

clientRouter.post("", createUserController)
clientRouter.get("", readUsersController)
clientRouter.get("/:id", getOneUserController)
clientRouter.patch("/:id", editUserController)


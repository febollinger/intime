import { Router } from "express";
import { createUserController, deleteUserController, editUserController, getOneUserController, readUsersController } from "../controllers/user.controller";


export const clientRouter = Router()

clientRouter.post("", createUserController)
clientRouter.get("", readUsersController)
clientRouter.get("/:id", getOneUserController)
clientRouter.patch("/:id", editUserController)
clientRouter.delete("/:id", deleteUserController)


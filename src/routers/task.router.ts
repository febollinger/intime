import { Router } from "express";
import { createTaskController, deleteTaskController, editTaskController, getTasksController } from "../controllers/task.controller";

export const taskRouter = Router();

taskRouter.post("", createTaskController)
taskRouter.get("", getTasksController)
taskRouter.patch("/:id", editTaskController)
taskRouter.delete("/:id", deleteTaskController)
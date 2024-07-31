import { Router } from "express";
import { createTaskController, getTasksController } from "../controllers/task.controller";

export const taskRouter = Router();

taskRouter.post("", createTaskController)
taskRouter.get("", getTasksController)
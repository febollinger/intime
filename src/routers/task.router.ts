import { Router } from "express";
import { createTaskController } from "../controllers/task.controller";

export const taskRouter = Router();

taskRouter.post("", createTaskController)
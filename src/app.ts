import express from "express";
import { clientRouter } from "./routers/user.router";
import { taskRouter } from "./routers/task.router";


export const app = express();
app.use(express.json())

app.use("/register", clientRouter)
app.use("/task", taskRouter)
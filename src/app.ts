import express from "express";
import { createUserController, readUsersController } from "./controllers/user.controller";

export const app = express();
app.use(express.json())

app.post("/register", createUserController)
app.get("/register", readUsersController)
import express from "express";
import { clientRouter } from "./routers/user.router";


export const app = express();
app.use(express.json())

app.use("/register", clientRouter)
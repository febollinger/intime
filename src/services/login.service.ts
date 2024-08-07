import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import 'dotenv/config';

import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { UserLoginInterface } from "../interfaces/login.interface"

export const loginService = async (userLogin: UserLoginInterface) => {
    
    const getUser = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", { email: userLogin.email })
    .getOne()
    console.log(getUser)

    if(!getUser){
        throw new Error("User not found or wrong password.");
    }

    const comparePassword = await compare(userLogin.password, getUser.password)

    if(!comparePassword){
        throw new Error("User not found or wrong password.");
    }

    const creatingJwt = jwt.sign(
        {
            data: getUser.id
        }, 
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN
        } 
    )

    return creatingJwt

}
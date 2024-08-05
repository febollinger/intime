import { compare } from "bcrypt"
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
        console.log("wrong email or password", 401)
    }

}
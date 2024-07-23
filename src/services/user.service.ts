import { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"

export const createUserService = async (body: DeepPartial<User>) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const creatingUser = userRepository.create({
        ...body
    })

    const user = await userRepository.save(creatingUser)

    return user
}

export const readUserService = async () => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findingUsers = await userRepository.find()

    return findingUsers

}

export const getOneUserService = async (body: string) => {

}

export const editUserService = async (body: string) => {

}

export const deleteUserService = async (body: string) => {

}

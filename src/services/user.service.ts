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

export const getOneUserService = async (userId: number) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUserById = userRepository.findOne({
        where:{
            id: userId
        }
    })
 
    return findUserById
}

export const editUserService = async (userId: number, userBody: string) => {
    const userRepository = await AppDataSource.createQueryBuilder()
    .update(User)
    .set(userBody)
    .where("id = :id",{id: userId})
    .execute()

    return userRepository

}

export const deleteUserService = async (userId: number) => {
    const userRepository = await AppDataSource.getRepository(User).createQueryBuilder().softDelete().where("id = :id", {id: userId}).execute()

    return userRepository
}

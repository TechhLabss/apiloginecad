import { prisma } from '../database/prismaClient'

export async function getUsersDB() {
    return prisma.public_usuarios.findMany()
}

export async function createUserDB(nome: string, email: string, senha: string, id: string ) {
    return prisma.public_usuarios.create({
        data: {
            nome,
            email,
            senha,
            id
        }
    })
}
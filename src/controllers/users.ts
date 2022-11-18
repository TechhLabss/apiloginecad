import { prisma } from '../database/prismaClient'

export async function getUsersDB() {
    return prisma.public_usuarios.findMany()
}
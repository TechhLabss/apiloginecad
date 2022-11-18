
import { prisma, PrismaClient } from '@prisma/client';
import  { request, response } from 'express';

export class CreateProductController {
    async handle(request: request, response: response){
        const { nome, email, senha } = request.body;

const product = await prisma.

        return response.json();
    }
}

import { prisma } from '../database/prismaClient';
import  { request, response } from 'express';

export class CreateProductController {
    async handle(request: request, response: response){
        const { nome, email, senha } = request.body;

const product = await prisma.public_usuarios;

        return response.json();
    }
}
// codigo da moça !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
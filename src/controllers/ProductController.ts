import { Request, Response } from 'express'

export class CreateProductController {
    async handle(request: Request, response: Response){
        return response.json();
    }
}
import { createUserDB } from "../controllers/users";

export default async (req:any, res:any) => {
    const {nome, email, senha, id} = req.body

    const createUser = await createUserDB(nome, email, senha, id)
    
    res.json({ result: createUser})
}
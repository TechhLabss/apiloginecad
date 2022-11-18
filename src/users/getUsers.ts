import { getUsersDB } from '../controllers/users'

export default async (req:any, res:any) => {
    const getUsers = await getUsersDB()

    res.json({ result: getUsers })
}
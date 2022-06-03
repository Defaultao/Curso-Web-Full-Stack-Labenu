import { Request, Response } from 'express';
import { UserBusiness } from "../business/userBusiness"
import { Input } from "../model/userDTO"

export class UserController {
    async create (req: Request, res: Response): Promise<void>{
        try {
            const { name, email, password } = req.body

            const input: Input = {
                name,
                email,
                password
            }

            const userBusiness = new UserBusiness()
            userBusiness.create(input)

            res.status(201).send({ message: "Usuário criado com sucesso!" })
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
}
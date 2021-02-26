import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import User from '../model/UserModel';

export default {
    async create(request: Request, response: Response) {
        const {
            name,
            userName,
            password
        } = request.body;

        const userRepository = getRepository(User);

        const data = {
            name,
            userName,
            password
        }

        const schemma = Yup.object().shape({
            name: Yup.string().required(),
            userName: Yup.string().required(),
            password: Yup.string().required()
        })

        await schemma.validate(data, {
            abortEarly: false
        })

        const user = userRepository.create(data)
        await userRepository.save(user);
        return response.status(201).json({ user });
    },

    async delete(request: Request, response: Response) {
        const results = await getRepository(User).delete(request.params.id);

        return response.status(201).json({ message: "user deleted"})
    }
}

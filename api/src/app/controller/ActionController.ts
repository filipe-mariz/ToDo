import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Action from '../model/ActionModel';

export default {
    async create(request: Request, response: Response) {
        const { action, user_id } = request.body;
        const actionRepository = getRepository(Action);
        const data = { action, user_id }

        const schemma = Yup.object().shape({
            action: Yup.string().required()
        }) 

        await schemma.validate(data, {
            abortEarly: false
        })

        const ato = actionRepository.create(data);
        await actionRepository.save(ato);
        response.status(201).json({ato})
    },

    async delete(request: Request, response: Response) {
        const results = await getRepository(Action).delete(request.params.id);
        
        return response.status(201).json({message: "Ação deletada"})
    }
}
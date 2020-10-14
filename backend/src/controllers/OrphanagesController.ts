import { Request, Response } from 'express'
import Orphanage from '../models/Orphanage';
import { getRepository } from 'typeorm'; // typeorm utiliza repository pattern, ou seja,
// toda operação que queremos fazer no banco de dados (criar,deletar, listar, ...) passa por um repository
//o repository detem a regra de como o dato pode ser criado ou deletado ou alterado


export default{
    //get
    async index(request: Request , response: Response){
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages)
    },
    
    async create(request: Request, response: Response ) {

        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
    
        const orphanagesRepository = getRepository(Orphanage);
    
        const orphanage = orphanagesRepository.create({ //cria, deixa pré-criado
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        })
    
        await orphanagesRepository.save(orphanage); //save- persiste os dados criados acima no banco de dados
        
        return response.status(201).json(orphanage);
    }    
}
    

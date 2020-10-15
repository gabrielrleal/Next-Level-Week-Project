import { Request, Response } from 'express'
import Orphanage from '../models/Orphanage';
import { getRepository } from 'typeorm'; // typeorm utiliza repository pattern, ou seja,
// toda operação que queremos fazer no banco de dados (criar,deletar, listar, ...) passa por um repository
//o repository detem a regra de como o dato pode ser criado ou deletado ou alterado
import orphanageView from '../views/orphanagesView';

export default{



    //get
    async index(request: Request , response: Response){
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.find({
            relations:['images']
        });

        return response.json(orphanageView.renderMany(orphanages));
    },
    //get by id
    async show(request: Request , response: Response){
        const { id } =  request.params;

        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(orphanageView.render(orphanage));
    },
    //post
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
        // para salvar imagens
        const requestImages = request.files as Express.Multer.File[]; //instruindo que é um Array de arquivos. (multer)

        const images = requestImages.map(image => { // percorre cada uma das imagens
            return { path: image.filename }// retorna objeto contendo path( unica informação que precisa preencher ) o resto preenche automaticamente
        })          //  filename ->  nome do arquivo que foi salvo em disco
        
        const orphanage = orphanagesRepository.create({ //cria, deixa pré-criado
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        })
    
        await orphanagesRepository.save(orphanage); //save- persiste os dados criados acima no banco de dados
        
        return response.status(201).json(orphanage);
    }    
}
    

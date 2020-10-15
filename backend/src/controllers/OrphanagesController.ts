import { Request, Response } from 'express'
import Orphanage from '../models/Orphanage';
import { getRepository } from 'typeorm'; // typeorm utiliza repository pattern, ou seja,
// toda operação que queremos fazer no banco de dados (criar,deletar, listar, ...) passa por um repository
//o repository detem a regra de como o dato pode ser criado ou deletado ou alterado
import orphanageView from '../views/orphanagesView';
import * as Yup from 'yup';//modulo para validação
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
        
        const data = {
          name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images  
        } 

        //schema de validação
        const schema = Yup.object().shape({
            //quais campos que tenho na hora de inserir orfanato
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });
        //valida o schema em relação ao data
        await schema.validate(data, {//para fazer validação
            abortEarly: false,//quando TRUE, assim que encontra um campo que não está válido retorna imediatamente erro de validação.
                            
        })
        const orphanage = orphanagesRepository.create(data); //cria, deixa pré-criado
            
       
    
        await orphanagesRepository.save(orphanage); //save- persiste os dados criados acima no banco de dados
        
        return response.status(201).json(orphanage);
    }    
}
    

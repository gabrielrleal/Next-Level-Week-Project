import express from 'express';
import './database/connection';
import Orphanage from './models/Orphanage';
import { getRepository } from 'typeorm' // typeorm utiliza repository pattern, ou seja,
// toda operação que queremos fazer no banco de dados (criar,deletar, listar, ...) passa por um repository
//o repository detem a regra de como o dato pode ser criado ou deletado ou alterado
const app = express();

app.use(express.json());//permite utilizar o json no express.


app.post('/orphanages', async (request, response) => {
    
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body

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
    //await aguarda a linha executar para então partir para próxima, mas para isso é preciso transformar a função em assincrona (async)
    return response.json({message: ' aqui é o /orphanages'})
});

app.listen(3333);
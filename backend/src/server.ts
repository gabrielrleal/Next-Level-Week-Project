import express from 'express';
import './database/connection';


const app = express();

app.use(express.json());//permite utilizar o json no express.


app.post('/users', (request, response) => {
    return response.json({message: ' aqui é o /users '})
});

app.listen(3333);
import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.json({message: 'Este é o .get de /users'})
})

app.listen(3333);
import express from 'express';
import 'express-async-errors';//permite capturar erros async
import './database/connection';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());//permite utilizar o json no express.
app.use(routes);//importante que seja depois do express.json
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')))//para acessar imagens
app.use(errorHandler);


app.listen(3333);
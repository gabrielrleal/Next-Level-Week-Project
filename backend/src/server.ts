import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();


app.use(express.json());//permite utilizar o json no express.
app.use(routes);//importante que seja depois do express.json


app.listen(3333);
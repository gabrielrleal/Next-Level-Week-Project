import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();


// index, showm createm update, delete

routes.get('/orphanages', OrphanagesController.index );
routes.post('/orphanages', OrphanagesController.create );


export default routes;
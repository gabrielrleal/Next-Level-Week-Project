import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();


// index, show create update, delete


routes.get('/orphanages', OrphanagesController.index );
routes.get('/orphanages/:id', OrphanagesController.show );//get by id
routes.post('/orphanages', OrphanagesController.create );


export default routes;
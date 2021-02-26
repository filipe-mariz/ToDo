import { Router } from 'express';
import Action from './app/controller/ActionController'

const routes = Router();

routes.post('/createaction', Action.create);
routes.delete('/deleteaction/:id', Action.delete);

export default routes;

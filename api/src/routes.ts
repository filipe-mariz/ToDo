import { Router } from 'express';
import User from './app/controller/UserController';
import Action from './app/controller/ActionController'

const routes = Router();

routes.post('/createuser', User.create);
routes.post('/createaction', Action.create);
routes.delete('/deleteuser/:id', User.delete);
routes.delete('/deleteaction/:id', Action.delete);

export default routes;

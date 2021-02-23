import { Router } from 'express';
import User from './app/controller/UserController';

const routes = Router();

routes.post('/createuser', User.create);

export default routes;

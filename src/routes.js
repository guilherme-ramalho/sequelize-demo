import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AppointmentController from './app/controllers/AppointmentController';

const routes = new Router();

routes.get('/user', UserController.select);
routes.get('/appointments', AppointmentController.select);

export default routes;

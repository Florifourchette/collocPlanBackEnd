import { Router } from 'express';
import * as uniqueColocController from '../controllers/uniqueColoc_C.js';

const uniqueColocRoute = Router();

uniqueColocRoute.route('/:id').get(uniqueColocController.getColoc);

export default uniqueColocRoute;

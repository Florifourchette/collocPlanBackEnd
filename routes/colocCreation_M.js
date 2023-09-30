import { Router } from "express";
import * as colocCreationController from '../controllers/newColoc_C.js'

const colocCreationRoute = Router()

colocCreationRoute
  .route('/creationColoc')
  .post(colocCreationController.createColoc);
  
export default colocCreationRoute
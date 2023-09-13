import { Router } from "express";
import * as uniqueUserController from '../controllers/uniqueUser_C.js'

const uniqueUserRoute = Router()

uniqueUserRoute.route('/:userID').get(uniqueUserController.getUser);

export default uniqueUserRoute;
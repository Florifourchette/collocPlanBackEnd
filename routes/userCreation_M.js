import { Router } from "express";
import * as userCreationController from '../controllers/userCreation_C.js'

const userCreationRoute = Router()

userCreationRoute.route('/').post(userCreationController.createUser);

export default userCreationRoute;
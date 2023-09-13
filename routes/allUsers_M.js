import { Router } from "express";
import * as AllUsersController from '../controllers/AllUsers_C.js'

const allUsersRoute = Router()

allUsersRoute.route('/').get(AllUsersController.getUsers);

export default allUsersRoute;
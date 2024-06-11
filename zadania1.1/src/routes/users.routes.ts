import { Express } from "express";
import { Router } from "express";
import usersControllers from "../controller/users.controllers";
const usersRouter =  Router();

usersRouter.post('/user', usersControllers.createUser);
usersRouter.get('/user', usersControllers.getUsers);
usersRouter.put('/user', usersControllers.updateUser);

export default usersRouter;
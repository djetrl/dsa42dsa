import { Router } from "express";
import LogController from "../controller/log.controllers.js";
const logRouter = new Router();

logRouter.post('/log', LogController.createLog);
logRouter.get('/log', LogController.getLog);


export default logRouter;
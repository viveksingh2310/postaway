import { Router } from "express";
import LikeController from "./like.controller.js";
const LikeRouter=new Router();
LikeRouter.get('/',LikeController.getLikes)
LikeRouter.post('/',LikeController.updateLikes)
export default LikeRouter;

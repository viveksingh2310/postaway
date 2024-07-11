import { Router} from "express";
import CommentController from "./comment.controller.js"; 
const CommentRouter=new Router();
CommentRouter.get('/',CommentController.getComments);
CommentRouter.put('/',CommentController.addComment);
CommentRouter.delete('/',CommentController.deleteComment);
CommentRouter.post('/',CommentController.updateComment);
export default CommentRouter;


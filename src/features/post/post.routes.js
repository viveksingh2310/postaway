import Router from 'express'
import PostController from "./post.controller.js"
import fileUpload from '../../middleware/fileupload.middleware.js'
const PostRouter=new Router()
PostRouter.get('/',PostController.getAll)
PostRouter.get('/:userId',PostController.getUserPost)
PostRouter.post('/',fileUpload.single('imageUrl'),PostController.createPost)
PostRouter.put('/',fileUpload.single('imageUrl'),PostController.updatePost)
PostRouter.delete('/',PostController.delete)
export default PostRouter;

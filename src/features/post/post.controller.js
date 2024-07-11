import PostModel from "./post.model.js";
export default class PostController{
    static getAll(req,res){
        return res.status(200).send(PostModel.getAll());
    }
    static getUserPost(req,res){///body userId
       console.log(req.params.userId); 
        if(!PostModel.getUserPost(req.params.userId))
            return res.send(400).send('a bad request')
        return res.status(200).send(PostModel.getUserPost(req.params.userId));
    }
    static getById(req,res){//body id
        if(!PostModel.getById(req.param.id))
            return res.status(400).send('a bad request')
        return PostModel.getById(req.param.id)
    }
    static createPost(req,res){
        const {userId,caption}=req.body;
        const imageURL='/images/'+req.file.imageURL;//here the url with respect to the server storage is changed
        const newPost=PostModel.createPost(userId,caption,imageURL)
        if(!newPost)
            return res.status(400).send('a bad request')
        console.log("ooooooooooo");
          return res.status(200).send(newPost);
    }
    static updatePost(req,res){//only id of the existinf post is sifficient for updation process to undergo
        const {id,caption}=req.body;
        const imageURL='../../images/'+req.file.filename;
      return res.status(200).send(PostModel.updatePost(id,caption,imageURL))
    }
    static delete(req,res){
        const{id}=req.body;
       const del=PostModel.deletePost(id);
       if(!del)
        return res.status(400).send('Post Not Found')
    return res.status(200).send(del)
    }
}
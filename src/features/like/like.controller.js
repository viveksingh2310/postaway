import LikeModel from "./like.model.js"
export default class LikeController{
    static getLikes(req,res){
        const {postId}=req.body;
       const likes= LikeModel.getLikes(postId);
       if(!likes)
        return res.status(400).send('a bad request')
    return res.status(200).send(likes);
    }
    static updateLikes(req,res){
        const{postId,email}=req.body;
        const updatedRes=LikeModel.updateLikes(postId,email);
        if(!updatedRes)
            return res.status(400).send('bad request')
        return res.status(200).send(updatedRes)
    }
}

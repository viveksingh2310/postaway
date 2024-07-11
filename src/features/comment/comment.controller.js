import { CommentModel } from "./comment.model.js";
export default class CommentController{
    static getComments(req,res){
        const {postId}=req.body;
        if(!CommentModel.getComments(postId))
            return res.status(400).send('a bad request');
        return res.status(200).send(CommentModel.getComments(postId))
    }
    static updateComment(req,res){
        const {id,content}=req.body;
        const updatedRes=CommentModel.updateComment(id,content);
        if(!updatedRes)
            return res.status(400).send('comment not found')
        return res.status(200).send(updatedRes)
    }
    static deleteComment(req,res){
        const{id}=req.body;//commentid
        const p= CommentModel.deleteComment(id);
        if(!p)
            return res.status(400).send('comment not found')
        return res.status(200).send(p);
    }
    static addComment(req,res){
        const {userId,postId,content}=req.body;
        const p=CommentModel.addComment(userId,postId,content);
        if(!p)
            return res.status(400).send('bad request to add comment')
        return res.status(200).send(p);
    }
}
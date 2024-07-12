export class CommentModel{
    constructor(id,userId,postId,content){
        this.id=id;
        this.userId=userId;
        this.postId=postId;
        this.content=content;
    }
    static getComments(id){
        var cmnts=[];
        this.comments.forEach((c)=>{
            if(c.postId==id)
                cmnts.push(c)
        })
        return cmnts;
    }
    static addComment(userId,postId,content){
        const newComment=new CommentModel(this.comments.length+1,userId,postId,content);
        this.comments.push(newComment);
        return newComment;
    }
    static deleteComment(id){
        const ele=this.comments.find(c=>c.id==id);
        // console.log(ele);
        const indx=this.comments.findIndex((u)=>u==ele)
       return this.comments.splice(indx,1)
    }
    static updateComment(id,content){
        const e=this.comments.find((c)=>c.id==id)
        if(!e){
            return;}
       else{
        const i=this.comments.findIndex((p)=>p==e)
        this.comments[i].content=content
        return this.comments[i]
                    }
    }
    static comments=[
        new CommentModel(1,2,4,"Fabulous place to visit really"),
        new CommentModel(2,1,3,"Fabulous really"),
        new CommentModel(3,3,1,"Fabulous place to visit "),
        new CommentModel(4,3,2,"Beautiful place to have you summer vacation"),
        new CommentModel(5,1,1,"Wonderful place!!!"),
    ]
}
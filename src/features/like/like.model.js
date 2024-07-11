export default class LikeModel{
    constructor(id,postId,email){//we will add the functionality to show username of the user who liked a particular post
        this.id=id;
        this.userId=email;
        this.postId=postId;
        this.isLiked=true;
    }
    static getLikes(postId){
        let postLikes=[];
        LikeModel.likes.forEach((u)=>{
            if(u.postId==postId)
                postLikes.push(u)
        })
        postLikes.splice(0,1);
        return postLikes;
    }
    static updateLikes(postId,email){
        this.likes.forEach((l)=>{
            if(l.postId==postId && l.email==email){
                const status=l.isLiked;
                l.isLiked=!status;
            }
        })
       return this.likes.forEach((l)=>l.postId==postId && l.email==email)
    }
    static likes=[
        new LikeModel(1,1,'viveksingh14538@gmail.com'),
        new LikeModel(2,1,'ranadeepak342@gmail.com'),
        new LikeModel(3,1,'neerajkathait@gmail.com'),
        new LikeModel(4,3,'viveksingh14538@gmail.com'),
        new LikeModel(5,3,'ranadeepak342@gmail.com'),
        new LikeModel(6,4,'viveksingh14538@gmail.com'),
        new LikeModel(7,4,'ranadeepak342@gmail.com')
    ]
}
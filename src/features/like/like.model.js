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
    //     this.likes.forEach((u)=>{
    //         console.log(u.email);

    //     })
    //     this.likes.forEach((u)=>{
    //         console.log(u.postId);
            
    //     })
    //    const i= LikeModel.likes.find((u)=>u.email==email && u.postId==postId);
    //    console.log(i);
    //    const indx=this.likes.findIndex(i);
    //    console.log(indx);
    //    console.log(indx);
    //    this.likes[indx].email=email;
    //    this.likes[indx].postId=postId;
        this.likes.forEach((l)=>{
            // console.log('hola')
            if(l.postId==postId && l.userId==email){
                // const status=l.isLiked;
                console.log('ster')
                l.isLiked=!l.isLiked;
            }
        })
       return this.likes.filter((u)=>u.postId==postId && u.userId==email)
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
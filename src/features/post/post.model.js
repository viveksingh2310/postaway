export default class PostModel{
    constructor(id,userId,caption,imageURL){
        this.id=id;
        this.userId=userId;
        this.caption=caption;
        this.imageURL=imageURL;
    }
    static createPost(userId,caption,imageURL){//post 
        const newPost=new PostModel(this.posts.length+1,userId,caption,imageURL)
        this.posts.push(newPost);
        return newPost
    }
   static getUserPost(userId){//here the credentials of user are used (get:userId)
        let userPost=[];
        PostModel.posts.forEach((u)=>{
            if(u.userId==userId)
                userPost.push(u);
        })
        return userPost
    }
    static getById(id){//get:id
        const index=this.posts.findIndex((u)=>u.id==id)
        if(index<0)
            return;
        return this.posts[index]
    }
   static getAll(){//get
    return PostModel.posts;
   }
   static updatePost(id,caption,imageURL){//put method
   const indexUpdated= PostModel.posts.findIndex((u)=>u.id==id);
   PostModel.posts[indexUpdated].caption=caption;
   PostModel.posts[indexUpdated].imageURL=imageURL;
   return PostModel.posts[indexUpdated];
   }
   static deletePost(id){//delte
    id=this.getById(id)
    if(!id)
        return
    return this.posts.splice(this.posts.indexOf(id),1)
}
    static posts=[
        new PostModel(1,2,"Hello welvcome to hawai","https://cdn1.matadornetwork.com/blogs/1/2018/08/double-rainbow-on-Kauai.jpg"),
        new PostModel(2,1,"Hello welvcome to india","https://www.hdwallpapers.in/download/taj_mahal_agra_india_4k-HD.jpg"),
        new PostModel(3,1,"laptop and the never ending work is always my best place in this world to explore more into the universe","https://get.pxhere.com/photo/laptop-computer-work-people-technology-web-internet-young-corporate-office-communication-professional-business-monitor-project-startup-design-students-display-strategy-plan-planning-learning-presentation-company-marketing-710514.jpg"),
        new PostModel(4,2,"the siblings bonds are the best among all onds in this world","https://i.pinimg.com/564x/53/73/d9/5373d962807c73a4526219c2ced76329.jpg"),
    ]
    
}
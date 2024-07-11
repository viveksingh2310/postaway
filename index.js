import express from 'express'
import bodyParser from 'body-parser';
import { UserRoute } from './src/features/user/user.routes.js';
import UserAuth from './src/middleware/user.authentication.js';
import PostRouter from './src/features/post/post.routes.js';
export const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    return res.send('hello you are in the index of Postaway');
})
app.use('/api',UserRoute);//user signup and signin is used here
app.use('/api/posts',UserAuth,PostRouter)
app.use('/api/likes',UserAuth,)
app.use('api/comments',UserAuth)


import express from 'express'
export const app=express();
app.get('/',(req,res)=>{
    return res.send('hello you are in the index of Postaway');
})

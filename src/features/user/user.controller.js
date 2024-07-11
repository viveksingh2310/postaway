import jwt from 'jsonwebtoken'
import UserModel from "./user.model.js";
export default class UserController{
    static signup(req,res){
        const {name,email,pass}=req.body;
        const newUser=UserModel.signup(name,email,pass)
        if(newUser)
            return res.status(201).send(newUser);
        return res.status(401).send('a bad request');
}
    static signin(req,res){
        const {email,pass}=req.body;
        const user=UserModel.signin(email,pass);
        const token=jwt.sign({email:email},'qwertyuiop',{expiresIn:'1h'})
        if(user)
            return res.status(201).send(token)
        return res.status(401).send('unregistered user is trying to login in to API')
    }
}
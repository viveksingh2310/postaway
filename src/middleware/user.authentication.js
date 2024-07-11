import jwt from 'jsonwebtoken'
export default function UserAuth(req,res,next){
    const token=req.header['authorization']
    if(!token)
        return res.status(400).send('user not registered');
    try{
    const payload=jwt.verify(token,'qwertyuiop');
    console.log(payload);
    }catch(err){
        console.log(err);
        return res.status(400).send('unauthorized user')
    }
    next();
}
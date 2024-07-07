export default class UserModel{
    constructor(id,name,email,pass){
        this.id=id;
        this.name=name;
        this.email=email;
        this.pass=pass;
    }
    static signin(email,pass){
      const user=UserModel.db.find((user)=>user.email==email && user.pass==pass)
        if(!user){
            return;
        }
        return user;
    }
    static signup(name,email,pass){
         const newUser=new UserModel(db.length+1,name,email,pass);
        if(UserModel.db.push(newUser)){
            return newUser;
        }
        console.log('Incorrect format of values are passed for creation of new user')
        return;


    }
    static db=[
        new UserModel(1,'Vivek Singh','viveksingh1458@gmail.com','1234'),
        new UserModel(2,'Deepak Rana','ranadeepak342@gmail.com','5556'),
        new UserModel(3,'Neeraj Singh','neerajkathait@gmail.com','8889'),
    ]
}
const express= require("express");
const app=express();
const bodyparser=require("body-parser");
const path=require("path");
const bcrypt=require("bcrypt");
const port=4000;
const usertable=require("./userdb/userdata");
require("./userdb/monconn");

app.use(bodyparser.urlencoded({
    extended:true
})
)
app.use(express.json());

const static_path=path.join(__dirname,"../")
 app.use(express.static(static_path));
app.get("/",(req,res)=>
{
    res.send("helloo ji");
    
})
app.get("/register",(req,res)=>
{
    res.sendFile(static_path+"./register.html");
    
})
app.get("/login",(req,res)=>
{
    res.sendFile(static_path+"./login.html");
    
})
app.post("/login", async(req,res)=>
{
   let useremail=req.body.email;
   let userpassword=req.body.password;

   let req_userdata= await usertable.findOne({email:useremail});
   if(req_userdata!==null)
   {

    if(req_userdata.password===userpassword)
    {
        res.send("user logined sucessfully");
    }

    else{
        res.send("Invalid login details");
    }
    
   }
   else{
    res.send("Invalid login details");
   }
    
})
app.post("/register",(req,res)=>
{
    //console.log(req.body);
    let req_userdata=new usertable(req.body);
    // console.log(req_userdata.password);
    // console.log(req_userdata.confirm_password);
    if(req_userdata.password==req_userdata.confirm_password)
    {
         req_userdata.save();
    res.send("registered sucessfully")
    }

    else{
        res.send("password is inncorrect");
    }
   
    
})
app.listen(port,()=>
{
    console.log(`listen on ${port}`);
})
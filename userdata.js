const mongoose=require("mongoose");

const userschema =new mongoose.Schema(
    {
        fullname:{
            type:String,
            require:true,
            lowercase:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        phone:{
            type:Number,
            require:true,
            
        },
        password:{
            type:String,
            require:true
        },
        confirm_password:{
            type:String,
            require:true
        }
    }
)
    const usertable=new mongoose.model("usertable",userschema);
    module.exports=usertable;

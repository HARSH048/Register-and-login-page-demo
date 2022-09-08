const mongoose=require("mongoose");
const usertable=require("./userdata");

mongoose.connect("mongodb://localhost:27017/myuserdata")
.then(()=>console.log("connection is sucessful"))
.catch((err)=>console.log(err));

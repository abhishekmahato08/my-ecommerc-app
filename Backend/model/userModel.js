const mongoose =require("mongoose");

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required :[true, "Name is required"], 
    },
  

    email:{
        type:String,
        required :  [true,'Email is required'],
        unique :true,
        // validate :
    },
  
    password:{
        type:String,
        required:[true,"password is required"]
    },

}, 

{timestamps:true},
);
 
const User= new mongoose.model("User",userModel)
module.exports =User
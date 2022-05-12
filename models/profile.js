//import mongoose
const mongoose = require("mongoose");

//define user schema
const profileSchema = new mongoose.Schema({

    userId:{type:mongoose.Schema.Types.ObjectId , ref:"user"},
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type: Number},
    address:{type:String},
    


})

//export module
module.exports = Profile = mongoose.model("profile", profileSchema);

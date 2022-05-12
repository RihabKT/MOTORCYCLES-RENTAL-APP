//import mongoose
const mongoose = require("mongoose");

//define user schema
const userSchema = new mongoose.Schema({

    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type: Number},
    address:{type:String},
    role:{type:Number, default:1}


})

//export module
module.exports = User = mongoose.model("user", userSchema);

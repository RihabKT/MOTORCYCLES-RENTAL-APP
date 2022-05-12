// import mongoose
const mongoose = require("mongoose");


//mongoose connection
const connectDB = async() =>{
try{
    await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true , useUnifiedTopology:true})
    console.log("DATABASE IS SUCCESSFULLY CONNECTED!")
}
catch(err){
    console.log(err)
}
}

//export module
module.exports = connectDB;
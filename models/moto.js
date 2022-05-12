//import mongoose
const mongoose = require("mongoose");

//define motorcycle schema
const motoSchema = new mongoose.Schema({

    brand:{type: String, required:true},
    motoName:{type: String, required:true},
    image:{type: String, required:true},
    imageOne:{type: String},
    imageTwo:{type: String},
    imageThree:{type: String},
    imageFour:{type: String},
    imageFive:{type: String},
    color: {type: []} ,
    enginePower:{type: Number, required:true},
    rentalPerDay: {type: Number, required:true},
    available:{type: Boolean, required:true},
    description:{type:String},
    video:{type:String},
    bookedTimeSlots: {
        fromdate:{type: String},
        todate: {type: String}
    }

}, {timestamps: true}
)

//export module
module.exports = Moto = mongoose.model("moto", motoSchema);
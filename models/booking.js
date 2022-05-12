//import mongoose
const mongoose = require("mongoose");

//define booking schema
const bookingSchema = new mongoose.Schema({
    moto: {type: mongoose.Schema.Types.ObjectId, ref:'moto'},
    user: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    bookedTimeSlots: {
        fromdate:{type: String},
        todate: {type: String}
    },
    totalDays: {type: Number},
    totalAmount: {type: Number, required:true},
    validation:{type: Boolean, default:false},
    transactionId: {type: String}
   
},
{timestamps: true}
)

//export module
module.exports = Booking = mongoose.model("booking", bookingSchema)

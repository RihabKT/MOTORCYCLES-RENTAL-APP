//import express
const express = require ("express");
const booking = require("../models/booking");



//import booking, moto, user from models
const Booking = require("../models/booking");
// const Moto = require("../models/moto");


//define router
const router = express.Router();




    
router.post("/bookMoto", async (req,res) => {
req.body.transactionId = "1234"
try{
  const newBooking = new Booking({...req.body})
  await newBooking.save()
  // const moto = await Moto.findOne({_id: req.body.moto})
  // moto.bookedTimeSlots.push(req.body.bookedTimeSlots)

  // await moto.save()
  res.send("YOUR BOOKING HAS BEEN CONFIRMED SUCCESSFULLY!")
}
catch(error){

  console.log(error)
return res.status(400).json(error);

}

})

//get all bookings
router.get("/getAllBookings", async (req,res) =>{
 
  try{
    const bookings = await Booking.find()
    res.status(200).json(bookings)
  }
  catch (error){
    res.status(400).json(error)
  }
})

//get booking by id using get method
//api: localhost:5000/api/theroadismine/booking/id
router.get("/:_id",(req,res) => {
  let {_id} = req.params
  Booking.find({_id})

  .then(Booking => res.send(Booking))
  .catch(err => res.send(err))
})


//delete a booking by id using delete method
//api: localhost:5000/api/theroadismine/booking/id
router.delete("/:_id", (req,res) => {
  let {_id} = req.params
  Booking.findByIdAndDelete({_id})

  .then(res.send("THIS BOOKING HAS BEEN DELETED SUCCESSFULLY!"))
  .catch(err => res.send(err)) 
})


//get userbooking
router.get("/getmybookings/:user",(req,res) => {
  let {user} = req.params
  Booking.find({user})

  .then(Booking => res.send(Booking))
  .catch(err => res.send(err))
})





//export module
module.exports = router;
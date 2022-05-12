//import express
const express = require("express");


//import moto from models
const Profile = require("../models/profile");

//define router
const router = express.Router();


//add profiles using post method
//api: localhost:5000/api/theroadismine/profile
router.post("/",(req,res) => {
    const newProfile = new Profile({...req.body})
    newProfile.save()

    .then(profile => res.status(200).json(profile))
    .catch(err => res.status(400).json(err))
})

//get all profiles using get method
//api: localhost:5000/api/theroadismine/profile
router.get("/",(req,res) => {
    Profile.find()

    .populate("userId")
    .then(profiles => res.send(profiles))
    .catch(err => res.send(err))
   })
   
   
   //get profile by id using get method
   //api: localhost:5000/api/theroadismine/profile/id
   router.get("/:userId",(req,res) => {
    let { userId} = req.params
      Profile.findOne(({ userId}))

       .populate("userId")
       .then(profile => res.send(profile))
       .catch(err => res.send(err))
   })
   
   //update a profile by id using put method
//api: localhost:5000/api/theroadismine/profile/id
router.put("/:userId", (req,res) => {
    console.log(req.body)
  console.log(req.params)
    let {userId} = req.params
    Profile.findByIdAndUpdate({userId}, { $set: {...req.body} } )

    .populate("userId")
    .then(res.send("THIS PROFILE HAS BEEN UPDATED SUCCESSFULLY!"))
    .catch(err => res.send(err))
})





//export router
module.exports = router
//import express
const express = require("express");

//import moto from models
const Moto = require("../models/moto");

//define router
const router = express.Router();



//add motorcycles using post method
//api: localhost:5000/api/theroadismine/moto
router.post("/",(req,res) => {
    const newMoto = new Moto({...req.body})
    newMoto.save()

    .then(moto => res.status(200).json(moto))
    .catch(err => res.status(400).json(err))
})

//get all motorcycles using get method
//api: localhost:5000/api/theroadismine/moto
router.get("/",(req,res) => {
 Moto.find()

 .then(motos => res.send(motos))
 .catch(err => res.send(err))
})


//get moto by id using get method
//api: localhost:5000/api/theroadismine/moto/id
router.get("/:_id",(req,res) => {
    let {_id} = req.params
    Moto.find({_id})

    .then(Moto => res.send(Moto))
    .catch(err => res.send(err))
})


//delete a moto by id using delete method
//api: localhost:5000/api/theroadismine/moto/id
router.delete("/:_id", (req,res) => {
    let {_id} = req.params
    Moto.findByIdAndDelete({_id})

    .then(res.send("THIS MOTORCYCLE HAS BEEN DELETED SUCCESSFULLY!"))
    .catch(err => res.send(err)) 
})


//update a moto by id using put method
//api: localhost:5000/api/theroadismine/moto/id
router.put("/:_id", (req,res) => {
    let {_id} = req.params
    Moto.findByIdAndUpdate({_id}, { $set: {...req.body} } )

    .then(res.send("THIS MOTORCYCLE HAS BEEN UPDATED SUCCESSFULLY!"))
    .catch(err => res.send(err))
})





//export router
module.exports = router;
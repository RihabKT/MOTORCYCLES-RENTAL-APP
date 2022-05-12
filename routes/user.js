//import express and other modules
const express = require("express");
const {registerUser, userLogin} = require("../controllers/userController");
const {registerRules, validator} = require("../middlewares/validator");
const isAuth = require("../middlewares/passportSetUp");
const User = require("../models/user");


//define router
const router = express.Router()


//define methods
router.post("/register", registerRules(), validator, registerUser)

router.post("/login", userLogin)

router.get("/currentuser", isAuth(), (req,res) => {
  res.json(req.user)
})



router.get('/currentuser/:_id', (req, res) => {
  let { _id } = req.params
  User.find({ _id})
      .then(user => res.send(user))
      .catch(err => res.send(err))
})





router.put("/currentuser/:_id", (req,res) => {
  console.log(req.body)
  console.log(req.params)
  let { _id } = req.params
  User.findOneAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("THIS USER HAS BEEN UPDATED!"))
      .catch(err => res.send(err))
})



//get all users using get method
//api: localhost:5000/api/theroadismine/moto
router.get("/",(req,res) => {
  User.find()
  .then(users => res.send(users))
  .catch(err => res.send(err))
 })





//export router
module.exports = router
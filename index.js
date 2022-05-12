//import dotenv
require("dotenv").config()

// import express and other required modules
const express = require("express");
const connectDB = require("./config/connectDB");
const moto = require("./routes/moto");
const cors = require("cors");
const user = require("./routes/user");
const passport = require("passport");
const booking = require("./routes/booking");
const profile = require("./routes/profile");



//initiate express
const app = express();


//initiate cors
app.use(cors());

//initiate passport
app.use(passport.initialize())


//4-parse data
app.use(express.json())


//3-define routes
 app.use("/api/theroadismine/moto",moto);
 app.use("/api/theroadismine/user", user);
 app.use("/api/theroadismine/booking", booking)
 app.use("/api/theroadismine/profile",profile)


//2-connect database
connectDB()


//1-run server
const PORT = process.env.PORT || process.env.port
app.listen(PORT, err =>{
    err? console.log(err) : console.log(`THE SERVER IS RUNNING SUCCESSFULLY ON PORT ${PORT}!`)
})
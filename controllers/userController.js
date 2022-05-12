//import models, bcrypt, jsonwebtoken modules
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//export registerUser for selecting email, crypting password
exports.registerUser = async(req,res) => {
    const user = {...req.body}
    const email = user.email
    const search = await User.findOne({email})

    if (search) return res.status(400).json({msg:"EMAIL ALREADY EXISTS...PLEASE CHOOSE ANOTHER ONE!"})

    try{
        const newUser = await new User({...user})
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt)
        
        newUser.password = hash

        await newUser.save()

        res.status(200).json({msg:" USER HAS BEEN REGISTRED SUCCESSFULLY!"})
    }

    catch(error){
        console.log(error)
        res.status(400).json({msg:"FAILURE OF USER REGISTRATION!"})
    }
}

//export userLogin for selecting correct email and password
exports.userLogin = async (req,res) => {
    const {email, password} = req.body

    const firstUser = await User.findOne({email})
    if (!firstUser) return res.status(400).json({msg:"THIS EMAIL DOESN'T EXIST! PLEASE SELECT A CORRECT ONE"})

    const isMatch = await bcrypt.compare(password, firstUser.password)
    if(!isMatch) return res.status(400).json({msg:"P.S: INCORRECT PASSWORD!"})

    const payload ={
        id: firstUser._id,
        email: firstUser.email,
        firstName: firstUser.firstName,
        lastName: firstUser.lastName,
        phone: firstUser.phone,
        address:firstUser.Address,
        role: firstUser.role
    }

    try{
        const token = await jwt.sign(payload, process.env.secretOrKey)
        res.status(200).json({msg:"P.S: LOGIN SUCCESS!", token: `Bearer ${token}`})
    }
 
    catch(error){
        res.status(400).json({msg:"P.S: LOGIN FAILURE!"})
    }
}
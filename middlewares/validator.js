//import check, validationResult from express-validator
const {check, validationResult} = require ("express-validator");

exports.registerRules = () => [
    check("firstName", "this field is required").notEmpty(),
    check("lastName", "this field is required").notEmpty(),
    check("email", "this field is required").notEmpty(),
    check("email", "this is not a valid email").isEmail(),
    check("password", "this field is required").notEmpty(),
    check("password", "this is not a valid password").isLength({min:6, max:18}),
    check("phone", "this field is required").notEmpty(),
    check("phone", "this is not a valid phone number").isLength({min:8}),
    check ("address", "this field is required").notEmpty(),
    // check("role", "this field is required").notEmpty()
    
]

exports.validator = (req,res,next) => {
    const errors = validationResult(req)
    errors.isEmpty()? next() : res.status(400).json({errors: errors.array() })
    
}
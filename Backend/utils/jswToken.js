const Jwt = require('jsonwebtoken');
 const generateToken =(id)=>{
    return Jwt.sign({id},process.env.JWT_TOKEN,{
        expiresIn:"30d"
    })
 }

 module.exports = generateToken;
const mongoose = require('mongoose')
 const connectDB =  async()=>{
    try {
        const con =await  mongoose.connect(process.env.MONGO_URL)
        console.log("db connect")
    } catch (error) {
        console.log("not connected");
    }
 }

 module.exports= connectDB;
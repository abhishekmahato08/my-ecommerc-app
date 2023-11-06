const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/db')
// const cors = require('cors')

// -------------IMPORT ROUTER---------------//
const userRoute = require('./routes/userRoute.js')


const app  = express();

dotenv.config();
connectDB();

app.use(express.json());


// ------------Routes----------//
app.use('/api/users',userRoute)

//------------PORT---------------//
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('server running  on port 8000---'))

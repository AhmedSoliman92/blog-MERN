const connectDB= require('./config/connectDB')
const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routers/users')
const app = express()
const dotenv = require('dotenv');


dotenv.config();

//connect to mongoDB
connectDB()

//routers
app.use('/users',usersRoutes)
mongoose.connection.once('open',()=>{
    console.log("Connected to your DB..")
    app.listen('8500',()=>{
        console.log("Server listen on port 8500")
    })
})

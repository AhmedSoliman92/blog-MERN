const connectDB= require('./config/connectDB')
const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routers/users')
const blogsRoutes = require('./routers/blogs')
const multer = require('multer');
const path = require('path')
const app = express()
const dotenv = require('dotenv');

//middleware
app.use(express.json())
dotenv.config();

//connect to mongoDB
connectDB()
//routers
app.use('/images',express.static(path.join(__dirname,'public/images')))
app.use('/users',usersRoutes)
app.use('/blogs',blogsRoutes)
app.use('/cat',blogsRoutes)

//multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        console.log(req.body)
      cb(null, req.body.name)
    }
  })
  
  const upload = multer({ storage: storage })
  app.post('/upload', upload.single('file'), function (req, res, next) {
      res.sendStatus(201)
})
mongoose.connection.once('open',()=>{
    console.log("Connected to your DB..")
    app.listen("8500",()=>{
        console.log("Server listen on port 8500")
    })
})

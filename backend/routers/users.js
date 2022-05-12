const express = require('express');
const router = express.Router();


//register a new user
router.post('/register',(req,res)=>{
        //register
})


//login a new user
router.post('/login',(req,res)=>{
    //login
})

//delete a new user
router.delete('/:id',(req,res)=>{
    //delete
})
//update a new user
router.put('/:id',(req,res)=>{
    //update
})
module.exports = router 
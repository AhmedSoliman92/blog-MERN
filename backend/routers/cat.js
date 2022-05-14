const express = require('express');
const router = express.Router();
const Cat = require('../model/Category')

router.get('/',async(req,res)=>{
    try {
        const Cat = await Cat.find();
        res.status(201).json(Cat);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

module.exports = router 
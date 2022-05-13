const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../model/User')
//register a new user
router.post('/register',async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        req.body.password =await bcrypt.hash(req.body.password, salt);
        const newUser = await new User(req.body)
        const saveUser =await newUser.save();
        const {password, ...other} = saveUser._doc
        res.status(201).json(other)
    } catch (err) {
        
        res.sendStatus(400)
    }
})


//login a new user
router.post('/login',async(req,res)=>{
    try {
        let user={}
        if(req.body.password){

            if (req.body.username){
                user =await User.findOne({username:req.body.username})

            }else{
                user =await User.findOne({email:req.body.username})
            }


            if(user){
                const password = await bcrypt.compare(req.body.password, user.password);
                if(!password) return res.status(401).json("You entered wrong password");
                const {password:mypass, ...rest} = user._doc;
                res.status(202).json(rest)
            }else{
                return res.status(401).json("The entered username/email is not registered.")
            }

        }else{
            return res.sendStatus(400)
        }
    } catch (err) {
        res.sendStatus(400)
    }
})

//delete a new user
router.delete('/:id',async(req,res)=>{
    try {
        const currentUser =await User.findById(req.params.id); 
        if(req.params.id === req.body._id || currentUser.isAdmin){
            const user = await User.findOne({_id:req.body._id})
            
            if(!user) return res.status(400).json("No user matched your request");
            await User.findOneAndDelete({_id:user._id});
            res.status(204).json("user have been deleted")
        }else{
            res.status(400).json("You are not allowed to delete this account")
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})
//update a new user
router.put('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(user){

            if(req.body.password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            const updatedUser = await User.updateOne({_id:user._id},{
                $set: req.body
            });
            res.status(200).json("Your information has been updated");
        }
    } catch (err) {
        res.status(400).json(err)
    }
})
module.exports = router 
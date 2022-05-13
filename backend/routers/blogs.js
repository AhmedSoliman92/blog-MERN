const express = require('express');
const router = express.Router();
const Blog = require('../model/Blog')

//create a new blog
router.post('/create',async(req,res)=>{
    try {
        const blog = await new Blog(req.body);
        const savedBlog = await blog.save();
        res.status(201).json(savedBlog);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})
//get a all blog
router.get('/',async(req,res)=>{
    try {
        const blogs = await Blog.find();
        res.status(201).json(blogs);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});
// get a blog by category
router.get('/cat',async(req,res)=>{
    try {
        const blogs = await Blog.find({category:{$in:req.body.category}});
        res.status(201).json(blogs);

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

// get a blog
router.get('/:id',async(req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(201).json(blog);

    } catch (err) {
        res.status(400).json("No Blog with this ID")
    }
});

//delete a new blog
router.delete('/:id',async(req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id);
        if(req.body.username === blog.username){
            await Blog.deleteOne({_id:blog._id})
            res.status(204).json(blog);
        }else{
            res.status(400).json("You can delete your Blogs only")
        }
    } catch (err) {
        res.status(400).json(err)
    }
})
//update a new blog
router.put('/',async(req,res)=>{
    try {
        const blog = await Blog.findById(req.body._id);
        console.log(blog)
        if(req.body.username === blog.username){
            const updateBlog=await Blog.findOneAndUpdate({_id:blog._id},{
                $set:req.body
            });
            res.status(200).json(updateBlog);
        }else{
            res.status(400).json("You can update your Blogs only")
        }
        

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})


module.exports = router 
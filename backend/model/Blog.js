
const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true,
        min:3,
        max:50
    },
    desc:{
        type:String,
        required: true,
        min:200,
    },
    category:{
        type:[],
        required: true
    },
    blogImg:{
        type:String,
        default:""
    },
},{timestamps:true});

module.exports = mongoose.model('Blog',blogSchema);
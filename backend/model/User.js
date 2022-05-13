const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = Schema({
    username:{
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique:true
    },
    email:{
        type:String,
        required: true,
        max:30,
        unique:true
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 20,
    },
    profileImg:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps: true});


module.exports = mongoose.model('User',userSchema);
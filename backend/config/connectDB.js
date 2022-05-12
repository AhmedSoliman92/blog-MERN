const mongoose = require('mongoose');
4

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        });
        
    } catch (err) {
        console.log(err)
    }
}

module.exports= connectDB



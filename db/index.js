require('dotenv').config();

const mongoose = require('mongoose');


const connect= async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to DB');
        
    } catch (error) {
        console.log(error);
    }
}


connect();

module.exports=mongoose.connection;
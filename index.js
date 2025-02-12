const mongoose=require('mongoose');
// const express=require('express');
// const app=express();
const app = require('./app');
require('dotenv').config();


//connect to database

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Connected to the database');
    app.listen(3000,()=>{
        console.log("Server is running @ http://localhost:3000");
        
    });
})
.catch((error)=>{
    console.log('Connection failed');
    console.log(error); 
})
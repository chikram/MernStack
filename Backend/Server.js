//this is the method that attact env veriable for the process object
require('dotenv').config();

const express= require('express');

//express app
const app=express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//routes
app.get('/',(req,res)=>{
res.json({mesg:"Welcome to the app"})
})

//listen for request
app.listen(process.env.PORT,()=>{
    console.log("listening on port ",process.env.PORT);
})
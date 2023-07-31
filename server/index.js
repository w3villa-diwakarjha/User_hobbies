const express= require('express')
const dotenv=require('dotenv')
dotenv.config({path: './config.env'});
// const {app}= require('./db/conn
const app= express();
const {getData}= require('./db/conn')
const PORT=process.env.PORT
app.get('/',async(req,res)=>{
    const userinfo= await getData();
    res.send(userinfo);
})

app.listen(PORT,()=>{
    console.log(`Your port is Running on port ${PORT}`)
})
const express = require('express');
const app = express();
const client=require('../model/userSchema')
const dotenv= require('dotenv');
dotenv.config({path: '../config.env'})
const dbName = process.env.DB;
let db;

async function getData(){
    let result= await client.connect();
    db= result.db(dbName);
    let collection= db.collection(process.env.COLLECTION);
    let data= await collection.find({}).toArray();
    console.log(data);
    return data;
}

module.exports = {getData};

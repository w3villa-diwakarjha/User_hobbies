const { MongoClient } = require('mongodb');
const dotenv= require('dotenv')
dotenv.config({path: '../config.env'})
const mongoURI= process.env.MONGODBURL;

const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports=client
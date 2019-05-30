require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(cors())

const port = process.env.PORT || 4000;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-t6a6m.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`;

mongoose.connect(uri).then(()=>{
    app.listen(port, ()=>{
        console.log(`listening of port ${port}`)
    })
}).catch(err=>{
    console.log(err);
})

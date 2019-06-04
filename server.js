require('dotenv').config()
const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./backend/schema/schema')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const app = express()

app.use(bodyParser.json())
app.use(cors())
const authMiddleware = async(req)=>{
    const token = req.headers.authorization;
    if(!token){
        return req.next();
    }
    
    try{
        const  user = await jwt.verify(token, process.env.SECRET);
        req.user = user;
    }catch(err){
        console.log(err)
    }
    req.next();
}
app.use(authMiddleware)

app.use('/graphql', expressGraphQL(req=>({
    schema,
    graphiql: true,
    context: {
        user: req.user
    }
})))

const port = process.env.PORT || 4000;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-t6a6m.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`;
if(process.env.ENVIRONMENT == 'production'){
    mongoose.connect(uri).then(()=>{
        app.listen(port, ()=>{
            console.log(`listening of port ${port}`)
        })
    }).catch(err=>{
        console.log(err);
    })    
}

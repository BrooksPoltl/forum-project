require('dotenv').config()
const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./backend/schema/schema')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('express-jwt')

const app = express()

app.use(bodyParser.json())
app.use(cors())
const authMiddleware = jwt({
    secret: process.env.SECRET,
    credentialsRequired: false
})
app.use(authMiddleware)

app.use('/graphql', expressGraphQL(req=>({
    schema,
    graphiql: true,
    context: {
        userName: req.username,
        id: req.id,
        firstName: req.firstName,
        lastName: req.lastName,
        profilePicture: req.profilePicture,
        email: req.email,
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

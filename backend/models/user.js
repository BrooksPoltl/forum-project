const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    comments:{
        type: Array,
        required: true
    },
    subscriptions:{
        type: Array,
        required: true
    },
    threads:{
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)
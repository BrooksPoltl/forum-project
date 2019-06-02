const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    profilePicture:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    comments:{
        type: Array,
        required: true
    },
    topics:{
        type: Array,
        required: true
    },
    threads:{
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const topicSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subscribers: {
        type: Number,
        required: true
    },
    threads: {
        type: Array,
        required: true
    },
    user: {
        type: Object,
        required: true
    },
    users: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('topic', topicSchema)
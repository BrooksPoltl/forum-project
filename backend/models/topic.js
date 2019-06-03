
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

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
        type: ObjectId,
        required: true
    },
    users: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('topic', topicSchema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const topicSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    subscribers: {
        type: Number,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    users: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('topic', topicSchema)
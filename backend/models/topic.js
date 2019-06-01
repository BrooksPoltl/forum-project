
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

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
    leader: {
        type: Object,
        required: true
    },
    moderators: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('topic', topicSchema)
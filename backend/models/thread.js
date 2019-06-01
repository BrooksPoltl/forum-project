

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId= mongoose.Schema.types.ObjectId
const threadSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    upvotes: {
        type: Array,
        required: true
    },
    downvotes: {
        type: Array,
        required: true
    },
    user: {
        type: Object,
        required: true
    },
    topic: {
        type: Object,
        required: true
    }
},{
    timestamps: true
})
module.exports = mongoose.model('thread', threadSchema)
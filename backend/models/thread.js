

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
    userId: {
        type: ObjectId,
        required: true
    },
    topicId: {
        type: ObjectId,
        required: true
    }
},{
    timestamps: true
})
module.exports = mongoose.model('thread', threadSchema)
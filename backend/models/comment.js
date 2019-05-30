const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new Schema({
    content: {
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
    replies: {
        type: Array,
        required: true
    },
    threadId: {
        type: ObjectId,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('comment', commentSchema)
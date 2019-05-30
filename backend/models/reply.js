
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
// {
//     id: int,
//     content: string,
//     upvotes: [userId],
//     downvotes: [userId],
//     createdAt: time,
//     replies: [replies],
//     commentId: int,
//   }
const replySchema = new Schema({
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
    commentId: {
        type: ObjectId,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('reply', replySchema)
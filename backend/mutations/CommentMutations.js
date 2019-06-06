
const graphql = require('graphql')
const {GraphQLNonNull, GraphQLString,GraphQLID} = graphql

const {CommentType} = require('../types/types')
const {Comment, Thread} = require('../models/models')

const createComment = {
    type: CommentType,
    args: {
        threadId: {type: new GraphQLNonNull(GraphQLID)},
        content: {type: new GraphQLNonNull(GraphQLString)}
    },
    async resolve(parentValue, args, {user}){
        if(!user){
            throw Error('Please sign in to leave a comment')
        }
        let thread = await Thread.findById(args.threadId)
        const newComment= new Comment({
            content: args.content,
            thread: thread,
            user: user.id,
            upvotes: [],
            downvotes:[],
            total: 0,
        })
        const response = await newComment.save()

    }
}

const upvoteComment= {
    type: CommentType,
    args:{
        commentId:{type: GraphQLNonNull(GraphQLID), resolve:async()=>{
            let comment = await Comment.find({_id: args.commentId})
            return comment;
        }}
    },
    async resolve(parentValue,args, {user}){
        let getUser = await User.findById(user.id)
        let updateUpvotes = await Comment.update({_id: args.commentId},{$addToSet: {upvotes:getUser}})
        let updateDownvotes = await Comment.update({_id: args.commentId},{$pull: {downvotes:getUser}})
        let updatedComment = await Comment.findById(args.commentId)
        return updatedComment
    }
}
const downvoteComment= {
    type: CommentType,
    args:{
        commentId:{type: GraphQLNonNull(GraphQLID), resolve:async()=>{
            let comment = await Comment.find({_id: args.commentId})
            return comment;
        }}
    },
    async resolve(parentValue,args, {user}){
        let getUser = await User.findById(user.id)
        let updateUpvotes = await Comment.update({_id: args.commentId},{$pull: {upvotes:getUser}})
        let updateDownvotes = await Comment.update({_id: args.commentId},{$addToSet: {downvotes:getUser}})
        let updatedComment = await Comment.findById(args.commentId)
        return updatedComment
    }
}

module.exports.createComment = createComment;
module.exports.upvoteComment = upvoteComment;
module.exports.downvoteComment = downvoteComment;

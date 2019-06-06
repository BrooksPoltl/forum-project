
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

module.exports.createComment = createComment;

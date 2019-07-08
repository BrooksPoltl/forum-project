const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull
} = graphql;



const {ThreadType} = require('./ThreadType')
const {Comment} = require('../models/models')

const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields:()=>{
    const { UserType } = require('./UserType')
    return{
        _id: {type: new GraphQLNonNull(GraphQLID)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(UserType)),
            resolve:async(parentValue, args)=>{
                let result = await Comment.findById(parentValue._id);
                let upvoteIds = result.upvotes;
                let response = []

                for(let i = 0; i<upvoteIds.length; i++){
                    let currentUpvote = await User.findById(upvoteIds[i])
                    response.push(currentUpvote);
                }
                return response
        }},
        downvotes: {type: new GraphQLNonNull(GraphQLList(UserType)),
            resolve:async(parentValue,args)=>{
                let result = await Comment.findById(parentValue._id);
                let downvoteIds = result.downvotes;
                let response = [];

                for(let i = 0; i<downvoteIds.length; i++){
                    let currentDownvote = await User.findById(downvoteIds[i]);
                    response.push(currentDownvote);
                }
                return response
        }},
        total: {type: new GraphQLNonNull(GraphQLInt), resolve:(parentValue, args)=>{
            let tally = parentValue.upvotes.length - parentValue.downvotes.length
            return tally
        }},
        user: {type: new GraphQLNonNull(UserType),
            resolve:async(parentValue, args)=>{
                const result = await Comment.findById(parentValue._id);
                const user = await User.findById(result.userId);
                return user
        }},
        thread: {type: new GraphQLNonNull(ThreadType),
            resolve:async(parentValue, args)=>{
                let result = await Comment.findById(parentValue._id)
                return result.thread
            }},
        createdAt:{type: new GraphQLNonNull(GraphQLString),
            resolve:async(parentValue,args)=>{
                let result = await Comment.findById(parentValue._id)
                let answer = result.createdAt.toString()
                return answer
            }}
    }}
})

module.exports.CommentType = CommentType;
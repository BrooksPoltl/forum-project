const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = graphql;



const {Thread, Comment, User, Topic} = require('../models/models')


const ThreadType= new GraphQLObjectType({
    name: 'Thread',
    fields:()=>{
        const {UserType} = require('./UserType')
        const {TopicType} = require('./TopicType')
        const {CommentType} = require('./CommentType')
        return{
        _id: {type: new GraphQLNonNull(GraphQLID)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        comments:{type: new GraphQLNonNull(GraphQLList(CommentType)),
            resolve:async (parentValue,args) => {
                const result = await Comment.find({threadId: parentValue._id })
                return result
        }},
        total: {type: new GraphQLNonNull(GraphQLInt),
            resolve:(parentValue, args)=>{
                let tally = parentValue.upvotes.length - parentValue.downvotes.length
                return tally
        }},
        upvotes: {type: new GraphQLNonNull(GraphQLList(UserType)),
            resolve:async(parentValue, args)=>{
                let result = await Thread.findById(parentValue._id);
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
                let result = await Thread.findById(parentValue._id);
                let downvoteIds = result.downvotes;
                let response = [];

                for(let i = 0; i<downvoteIds.length; i++){
                    let currentDownvote = await User.findById(downvoteIds[i]);
                    response.push(currentDownvote);
                }
                return response
        }},
        user: {type: new GraphQLNonNull(UserType),
            resolve:async(parentValue, args)=>{
                const result = await Thread.findById(parentValue._id);
                const user = await User.findById(result.userId);
                return user
        }},
        topic: {type: new GraphQLNonNull(TopicType),
            resolve:async(parentValue,args)=>{
                const result = await Thread.findById(parentValue._id);
                const topic = await Topic.findById(result.topicId);
                return topic
            },
        },
        createdAt:{type: new GraphQLNonNull(GraphQLString),resolve:async(parentValue,args)=>{
            let result = await Thread.findById(parentValue._id)
            let answer = result.createdAt.toString()
            
            return answer
        }}
    }}
})

module.exports.ThreadType= ThreadType;
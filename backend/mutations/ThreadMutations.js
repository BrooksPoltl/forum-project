
const{ThreadType, TopicType} = require('../types/types')

const {Thread, Topic, User} =require('../models/models')

const graphql = require('graphql')
const {GraphQLNonNull, GraphQLID, GraphQLString} = graphql


const createThread = {
    type: ThreadType,
    args: {
        topicId: {type: new GraphQLNonNull(GraphQLID)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)}
    },
    async resolve(parentValue, args, {user}){
        if(!user){
            throw Error('Please sign in to create a Thread')
        }
        let topic = await Topic.findById(args.topicId)
        const newThread = new Thread({
            title: args.title,
            description: args.description,
            topic: topic,
            user: user.id,
            upvotes: [],
            downvotes:[],
            total: 0,
        })
        const response = await newThread.save()

    }
}
const deleteThread = {
    type: ThreadType,
    args: {
        threadId:{type: GraphQLNonNull(GraphQLID), resolve:async()=>{
            let thread = await Thread.find({_id: args.thread})
            return thread;
        }}
    },
    async resolve(parentValue,args, {user}){
        return Thread.deleteOne({_id: args.threadId}).then(result=>{
            return{_id: args.threadId}
        }).catch(err=>{
            throw err
        })
    }
}
const upvoteThread = {
    type: ThreadType,
    args:{
        threadId:{type: GraphQLNonNull(GraphQLID), resolve:async()=>{
            let thread = await Thread.find({_id: args.thread})
            return thread;
        }}
    },
    async resolve(parentValue,args, {user}){
        let getUser = await User.findById(user.id)
        let updateUpvotes = await Thread.update({_id: args.threadId},{$addToSet: {upvotes:getUser}})
        let updateDownvotes = await Thread.update({_id: args.threadId},{$pull: {downvotes:getUser}})
        let updatedThread = await Thread.findById(args.threadId)
        return updatedThread
    }
}
const downvoteThread = {
    type: ThreadType,
    args:{
        threadId:{type: GraphQLNonNull(GraphQLID), resolve:async()=>{
            let thread = await Thread.find({_id: args.thread})
            return thread;
        }}
    },
    async resolve(parentValue,args, {user}){
        let getUser = await User.findById(user.id)
        let updateUpvotes = await Thread.update({_id: args.threadId},{$pull: {upvotes:getUser}})
        let updateDownvotes = await Thread.update({_id: args.threadId},{$addToSet: {downvotes:getUser}})
        let updatedThread = await Thread.findById(args.threadId)
        return updatedThread
    }
}
module.exports.createThread = createThread;
module.exports.deleteThread = deleteThread;
module.exports.upvoteThread = upvoteThread;
module.exports.downvoteThread = downvoteThread;


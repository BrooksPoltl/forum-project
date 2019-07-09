
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
            topicId: args.topicId,
            userId: user.id,
            upvotes: [],
            downvotes:[],
            comments: [],
            total: 0,
        });
        const response = await newThread.save();
        await Topic.update({_id: args.topicId}, {$addToSet: {threads: response._id}})
        return response
    }
}
const deleteThread = {
    type: ThreadType,
    args: {
        threadId:{type: GraphQLNonNull(GraphQLID), resolve:async()=>{
            let thread = await Thread.find({_id: args.threadId})
            return thread;
        }}
    },
    async resolve(parentValue,args, {user}){
        let getThread = await Thread.findById(args.threadId)
        if(getThread.user == user.id){
            return Thread.deleteOne({_id: args.threadId}).then(result=>{
                return{_id: args.threadId}
                }).catch(err=>{
                    throw err
            })
        }
    }
}
const upvoteThread = {
    type: ThreadType,
    args:{
        threadId: { type: GraphQLNonNull(GraphQLID) } 
    },
    async resolve(parentValue,args, {user}){
        let getUser = await User.findById(user.id)
        await Thread.update({_id: args.threadId},{$addToSet: {upvotes: user.id}})
        await Thread.update({_id: args.threadId},{$pull: {downvotes: user.id}})
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
        let updateUpvotes = await Thread.update({_id: args.threadId},{$pull: {upvotes: user.id}})
        let updateDownvotes = await Thread.update({_id: args.threadId},{$addToSet: {downvotes: user.id}})
        let updatedThread = await Thread.findById(args.threadId)
        return updatedThread
    }
}
module.exports.createThread = createThread;
module.exports.deleteThread = deleteThread;
module.exports.upvoteThread = upvoteThread;
module.exports.downvoteThread = downvoteThread;


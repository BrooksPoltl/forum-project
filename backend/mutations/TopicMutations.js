
const graphql = require('graphql')
const {GraphQLNonNull, GraphQLString, GraphQLID} = graphql

const {Topic,User, Thread, Comment} = require('../models/models')
const {TopicType} = require('../types/types')

const createTopic = {
    type: TopicType,
    args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
    },
    async resolve(parentValue, args, {user}){
        if(!user){
            throw Error('Please sign in to create a topic')
        };
        const newTopic = new Topic({
            title: args.title,
            subscribers: 0,
            userId: user.id,
            users: [],
            threads: []
        });
        const response = await newTopic.save();
        let topic = await Topic.find({title: args.title});
        topic = topic[0];
        return topic
    }
}

const deleteTopic = {
    type: TopicType,
    args: {
        topic:{type: GraphQLNonNull(GraphQLID), resolve:async()=>{
            let topic = await Topic.find({_id: args.topic})
            return topic;
        }}
    },
    async resolve(parentValue,args, {user}){
        let getTopic = await Topic.findById(args.topic)
        if(getTopic.user == user.id){
            let findThreads = await Thread.find({topic: getTopic})
            for(let i = 0; i<findThreads.length; i++){
                let curr = findThreads[i];
                await Comment.deleteMany({thread: curr});
            }
            let deleteSubscritions = await User.update({},{$pull:{topics:{_id: getTopic._id}}},{multi: true})
            let deleteThreads = await Thread.deleteMany({topic: getTopic})
            return Topic.deleteOne({_id: args.topic}).then(result=>{
                return{_id: args.topic}
            }).catch(err=>{
                throw err
            })
        }
        
    }
}

const subscribe = {
    type: TopicType,
    args:{ id:{ type: GraphQLNonNull(GraphQLID) } },
    async resolve(parentValue,args,{user}){
        let topic = await Topic.find({_id: args.id})
        topic = topic[0]
        for(let i = 0; i< topic.users.length; i++){
            let curr = topic.users[i]
            if(curr._id== user.id){
                throw Error("already subscribed")
            }
        }
        let updateTopic = await Topic.update({_id: args.id},{$addToSet: {users:user.id}})
        let updateUser = await User.update({_id: user.id},{$addToSet: {subscriptions: args.id}})
        let updatedTopic = await Topic.findById(args.id)
        return updatedTopic
    }
}
const unsubscribe = {
    type: TopicType,
    args:{id:{type: GraphQLNonNull(GraphQLID)}},
    async resolve(parentValue,args,{user}){
        await Topic.update({_id: args.id},{$pull:{users:user.id}})
        await User.update({_id: user.id},{$pull:{topics:args.id}})
        
        let updatedTopic = await Topic.find({_id:args.id})
        updatedTopic = updatedTopic[0]
        return updatedTopic
    }
}

module.exports.createTopic = createTopic;
module.exports.deleteTopic = deleteTopic;
module.exports.subscribe = subscribe;
module.exports.unsubscribe = unsubscribe;
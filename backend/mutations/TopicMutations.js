
const graphql = require('graphql')
const {GraphQLNonNull, GraphQLString, GraphQLID} = graphql

const {Topic,User} = require('../models/models')
const {TopicType} = require('../types/types')

const createTopic = {
    type: TopicType,
    args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
    },
    async resolve(parentValue, args, {user}){
        if(!user){
            throw Error('Please sign in to create a topic')
        }
        const newTopic = new Topic({
            name: args.name,
            subscribers: 0,
            user: user.id,
            users: [],
            threads: []
        })
        const response = await newTopic.save()
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
        return Topic.deleteOne({_id: args.topic}).then(result=>{
            return{id: args.topic}
        }).catch(err=>{
            throw err
        })
    }
}

const subscribe = {
    type: TopicType,
    args:{id:{type: GraphQLNonNull(GraphQLID)}},
    async resolve(parentValue,args,{user}){
        let topic = await Topic.find({_id: args.id})
        topic = topic[0]
        for(let i = 0; i< topic.users.length; i++){
            let curr = topic.users[i]
            if(curr._id== user.id){
                throw Error("already subscribed")
            }
        }
        let userObj = await User.find({_id: user.id})
        userObj = userObj[0]
        let updateTopic = await Topic.update({_id: topic._id},{$addToSet: {users:userObj}})
        let updateUser = await User.update({_id: user.id},{$addToSet: {topics:topic}})
        let updatedTopic = await Topic.find({_id:args.id})
        updatedTopic = updatedTopic[0]
        return updatedTopic
    }
}

module.exports.createTopic = createTopic;
module.exports.deleteTopic = deleteTopic;
module.exports.subscribe = subscribe;
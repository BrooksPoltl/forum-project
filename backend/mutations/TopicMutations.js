
const graphql = require('graphql')
const {GraphQLNonNull, GraphQLString, GraphQLID} = graphql

const {Topic} = require('../models/topic')
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
        console.log(args.topic)
        return Topic.deleteOne({_id: args.topic}).then(result=>{
            return{id: args.topic}
        }).catch(err=>{
            throw err
        })
    }
}



module.exports.createTopic = createTopic;
module.exports.deleteTopic = deleteTopic;
const {TopicType} = require('../types/TopicType')
const Topic= require('../models/topic')
const graphql = require('graphql')
const {GraphQLNonNull, GraphQLString} = graphql



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
        console.log(response)
    }
}

const deleteTopic = {
    type: TopicType,
    args: {},
    
}

module.exports.createTopic = createTopic;

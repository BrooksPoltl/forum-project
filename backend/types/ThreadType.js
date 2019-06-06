const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = graphql;



const {Thread} = require('../models/models')


const ThreadType= new GraphQLObjectType({
    name: 'Thread',
    fields:()=>{
        const {UserType} = require('./UserType')
        const {TopicType} = require('./TopicType')
        return{
        _id: {type: new GraphQLNonNull(GraphQLID)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        total: {type: new GraphQLNonNull(GraphQLInt), resolve(parentValue, args){
            let tally = parentValue.upvotes.length - parentValue.downvotes.length
            return tally
        }},
        upvotes: {type: new GraphQLNonNull(GraphQLList(UserType)),resolve:async(parentValue, args)=>{
            let result = await Thread.findById(parentValue._id)
            return [...result.upvotes]
        }},
        downvotes: {type: new GraphQLNonNull(GraphQLList(UserType)),resolve:async(parentValue,args)=>{
            let result = await Thread.findById(parentValue._id)
            return [...result.downvotes]
        }},
        user: {type: new GraphQLNonNull(GraphQLID)},
        topic: {type: new GraphQLNonNull(TopicType),
            resolve:async(parentValue,args)=>{
                let result = await Thread.findById(parentValue._id)
                return result.topic
            },
        },
    }}
})

module.exports.ThreadType= ThreadType;
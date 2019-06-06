const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
} = graphql;

const {User, Topic} = require('../models/models')

const TopicType = new GraphQLObjectType({
    name: 'Topic',
    fields:()=>{
    const {UserType} = require('./UserType')
    return{
        _id: {type: new GraphQLNonNull(GraphQLID)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        subscribers: {type: new GraphQLNonNull(GraphQLInt),resolve:(parentValue,args)=>{
            return parentValue.users.length
        }},
        user: {type: new GraphQLNonNull(GraphQLID)},
        users: {type: new GraphQLNonNull(GraphQLList(UserType)),resolve:async(parentValue,args)=>{
            let result = await Topic.findById(parentValue._id)
            console.log(result.users)
            return [...result.users]
        }},
        threads: {type: new GraphQLNonNull(GraphQLList(GraphQLID)),
        },
    }}
})


module.exports.TopicType = TopicType;
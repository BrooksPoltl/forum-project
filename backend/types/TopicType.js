const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
} = graphql;

const {User} = require('../models/models')

const TopicType = new GraphQLObjectType({
    name: 'Topic',
    fields:()=>{
    const {UserType} = require('./UserType')
    console.log(UserType)
    return{
        id: {type: new GraphQLNonNull(GraphQLID)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        subscribers: {type: new GraphQLNonNull(GraphQLInt),resolve:(parentValue,args)=>{
            return parentValue.users.length
        }},
        user: {type: new GraphQLNonNull(GraphQLID)},
        users: {type: new GraphQLNonNull(GraphQLList(UserType)),resolve:async(parentValue,args)=>{
            let result = await User.find({topics:{$in:{parentValue}} })
            console.log(result)
            return result
        }},
        threads: {type: new GraphQLNonNull(GraphQLList(GraphQLID)),
        },
    }}
})


module.exports.TopicType = TopicType;
const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = graphql;


const {UserType} = require('./UserType')
const {TopicType} = require('./TopicType')


const User = require('../models/user');
const Topic = require('../models/topic');

const ThreadType= new GraphQLObjectType({
    name: 'Thread',
    fields:()=>({
        id: {type: new GraphQLNonNull(GraphQLID)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        // user: {type: new GraphQLNonNull(UserType),
        //     resolve:(parentValue, args)=>{
        //         return parentValue.user
        //     },    
        // },
        // topic: {type: new GraphQLNonNull(TopicType),
        //     resolve:(parentValue,args)=>{
        //         return parentValue.topic
        //     },
        // },
    })
})

module.exports.ThreadType = ThreadType;
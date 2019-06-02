const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt
} = graphql;

const User = require('../models/user');
const Thread = require('../models/thread');

const {ThreadType} = require('./ThreadType')
const {UserType} = require('./UserType')

const TopicType = new GraphQLObjectType({
    name: 'Topic',
    fields:()=>({
        id: {type: new GraphQLNonNull(GraphQLID)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        subscribers: {type: new GraphQLNonNull(GraphQLInt)},
        // user: {type: new GraphQLNonNull(UserType)},
        //     resolve:(parentValue,args)=>{
        //         return parentValue.user
        //     },
        // users: {type: new GraphQLNonNull(GraphQLList(UserType)),
        //     resolve:(parentValue,args)=>{

        //     },
        // },
        // threads: {type: new GraphQLNonNull(GraphQLList(ThreadType)),
        //     resolve:(parentValue,args)=>{

        //     },
        // },
    })
})

module.exports.TopicType = TopicType;
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
        user: {type: new GraphQLNonNull(GraphQLID)},
        users: {type: new GraphQLNonNull(GraphQLList(GraphQLID))},
        threads: {type: new GraphQLNonNull(GraphQLList(GraphQLID)),
        },
    })
})

module.exports.TopicType = TopicType;
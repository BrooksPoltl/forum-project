const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt
} = graphql;

const {ThreadType} = require('./ThreadType')
const {UserType} = require('./UserType')
const {TopicType} = require('./TopicType')

const TopicType = new GraphQLObjectType({
    name: 'Topic',
    fields:{
        id: {type: GraphQLString},
        name: {type: new GraphQLNonNull(GraphQLString)},
        subscribers: {type: new GraphQLNonNull(GraphQLInt)},
        user: {type: new GraphQLNonNull(UserType)},
        users: {type: new GraphQLNonNull(GraphQLList(UserType))},
        threads: {type: new GraphQLNonNull(GraphQLList(ThreadType))},
    }
})

module.exports.TopicType = TopicType;
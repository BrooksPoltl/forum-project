const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

const {ThreadType} = require('./ThreadType')
const {CommentType} = require('./CommentType')
const {TopicType} = require('./TopicType')

const UserType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id: {type: GraphQLString},
        firstName: {type: new GraphQLNonNull(GraphQLString)},
        lastName: {type: new GraphQLNonNull(GraphQLString)},
        userName: {type: new GraphQLNonNull(GraphQLString)},
        profilePicture: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        comments: {type: new GraphQLNonNull(GraphQLList(CommentType))},
        subscriptions: {type: new GraphQLNonNull(GraphQLList(TopicType))},
        threads: {type: new GraphQLNonNull(GraphQLList(ThreadType))},
    }
})
module.exports.UserType = UserType;
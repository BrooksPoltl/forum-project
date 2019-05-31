const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

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
        comments: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        subscriptions: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        threads: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
    }
})
module.exports.UserType = UserType;
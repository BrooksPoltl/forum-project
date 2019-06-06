const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} = graphql;

const AuthType = new GraphQLObjectType({
    name: 'Auth',
    fields:()=>({
        _id: {type: new GraphQLNonNull(GraphQLID)},
        token: {type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports.AuthType = AuthType;
const {getUserById, getUsers}= require('../queries/UserQueries');
const graphql = require('graphql')
const {GraphQLObjectType} = graphql;
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: ()=>({
        user: getUserById,
        users: getUsers
    })
})
module.exports.RootQuery = RootQuery;
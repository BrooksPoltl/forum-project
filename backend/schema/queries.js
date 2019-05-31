const {getUserById, getUsers}= require('../queries/UserQueries');
const graphql = require('graphql')
const {GraphQLObjectType} = graphql;
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: ()=>({
        getUserById: getUserById,
        getUsers: getUsers
    })
})
module.exports.RootQuery = RootQuery;
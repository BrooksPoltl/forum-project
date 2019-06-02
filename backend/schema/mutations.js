const graphql = require('graphql');
const {signUp,login, deleteUser} = require('../mutations/UserMutations')
const {GraphQLObjectType} = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp: signUp,
        deleteUser: deleteUser,
        login: login
    }
})

module.exports.mutation = mutation;
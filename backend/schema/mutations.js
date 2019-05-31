const graphql = require('graphql');
const {signUp,login} = require('../mutations/UserMutations')
const {GraphQLObjectType} = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp: signUp
    }
})

module.exports.mutation = mutation;
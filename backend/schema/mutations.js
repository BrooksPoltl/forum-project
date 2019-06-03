const graphql = require('graphql');
const {signUp,login, deleteUser} = require('../mutations/UserMutations')
const {createTopic} = require('../mutations/TopicMutations')
const {GraphQLObjectType} = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp: signUp,
        deleteUser: deleteUser,
        login: login,
        createTopic: createTopic
    }
})

module.exports.mutation = mutation;
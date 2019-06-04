const graphql = require('graphql');
const {signUp,login, deleteUser} = require('../mutations/UserMutations')
const {createTopic, deleteTopic} = require('../mutations/TopicMutations')
const {GraphQLObjectType} = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp: signUp,
        deleteUser: deleteUser,
        login: login,
        createTopic: createTopic,
        // deleteTopic: deleteTopic
    }
})

module.exports.mutation = mutation;
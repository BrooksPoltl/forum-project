const graphql = require('graphql');
const {signUp,login, deleteUser, subscribe} = require('../mutations/UserMutations')
const {createTopic, deleteTopic} = require('../mutations/TopicMutations')
const {GraphQLObjectType} = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp,
        deleteUser,
        login,
        createTopic,
        deleteTopic,
        subscribe,
    }
})

module.exports.mutation = mutation;
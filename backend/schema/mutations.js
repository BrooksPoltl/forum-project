const graphql = require('graphql');
const {signUp,login, deleteUser} = require('../mutations/UserMutations')
const {createTopic, deleteTopic} = require('../mutations/TopicMutations')
const {GraphQLObjectType} = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp,
        deleteUser,
        login,
        createTopic,
        deleteTopic
    }
})

module.exports.mutation = mutation;
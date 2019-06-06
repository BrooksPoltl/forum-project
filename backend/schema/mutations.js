const graphql = require('graphql');
const {signUp,login, deleteUser} = require('../mutations/UserMutations')
const {createTopic, deleteTopic, subscribe, unsubscribe} = require('../mutations/TopicMutations')
const {createThread} = require('../mutations/ThreadMutations')
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
        unsubscribe,
        createThread
    }
})

module.exports.mutation = mutation;
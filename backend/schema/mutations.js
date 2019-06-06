const graphql = require('graphql');
const {signUp,login, deleteUser} = require('../mutations/UserMutations')
const {createTopic, deleteTopic, subscribe, unsubscribe} = require('../mutations/TopicMutations')
const {createThread, deleteThread,upvoteThread, downvoteThread} = require('../mutations/ThreadMutations')
const {createComment, upvoteComment,downvoteComment} = require('../mutations/CommentMutations')
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
        createThread,
        deleteThread,
        upvoteThread,
        downvoteThread,
        createComment,
        upvoteComment,
        downvoteComment
    }
})

module.exports.mutation = mutation;
const {getUserById, getUsers}= require('../queries/UserQueries');
const {getTopicById,getTopics} = require('../queries/TopicQueries')
const {getThreadById,getThreads} = require('../queries/ThreadQueries')

const {getCommentById,getComments} = require('../queries/CommentQueries')

const graphql = require('graphql')
const {GraphQLObjectType} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: ()=>({
        user: getUserById,
        users: getUsers,
        topic: getTopicById,
        topics: getTopics,
        thread: getThreadById,
        threads: getThreads,
        comment: getCommentById,
        comments: getComments,
    })
})
module.exports.RootQuery = RootQuery;
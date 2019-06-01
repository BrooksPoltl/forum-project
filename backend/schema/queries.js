const {getUserById, getUsers}= require('../queries/UserQueries');
const {getTopicById,getTopics} = require('../queries/TopicQueries')
const {getThreadById,getThreads} = require('../queries/ThreadQueries')
const {getReplyById,getReplies} = require('../queries/ReplyQueries')
const {getCommentById,getComments} = require('../queries/CommentQueries')

const graphql = require('graphql')
const {GraphQLObjectType} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: ()=>({
        user: getUserById,
        users: getUsers,
        topic: getTopicById,
        topics: getTopicById,
        thread: getThreadById,
        threads: getThreads,
        reply: getReplyById,
        replies: getReplies,
        comment: getCommentById,
        comments: getComments,
    })
})
module.exports.RootQuery = RootQuery;
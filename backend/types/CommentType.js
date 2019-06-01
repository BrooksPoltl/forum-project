const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = graphql;

const {ThreadType} = require('./ThreadType')
const {ReplyType} = require('./ReplyType')

const CommentType= new GraphQLObjectType({
    name: 'Comment',
    fields:{
        id: {type: GraphQLString},
        content: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        replies: {type: new GraphQLNonNull(GraphQLList(ReplyType))},
        thread: {type: new GraphQLNonNull(ThreadType)},
    }
})

module.exports.CommentType = CommentType;
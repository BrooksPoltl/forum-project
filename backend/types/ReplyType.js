const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = graphql;

const {CommentType} = require('./CommentType')

const ReplyType= new GraphQLObjectType({
    name: 'Reply',
    fields:{
        id: {type: GraphQLString},
        content: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        replies: {type: new GraphQLNonNull(GraphQLList(ReplyType))},
        comment: {type: new GraphQLNonNull(CommentType)},
    }
})

module.exports.ReplyType = ReplyType;
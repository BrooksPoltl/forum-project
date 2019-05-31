const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const ReplyType= new GraphQLObjectType({
    name: 'Reply',
    fields:{
        content: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        replies: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        commentId: {type: new GraphQLNonNull(GraphQLString)},
    }
})

module.exports.ReplyType = ReplyType;
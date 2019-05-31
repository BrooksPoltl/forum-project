const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const CommentType= new GraphQLObjectType({
    name: 'Comment',
    fields:{
        content: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        replies: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        threadId: {type: new GraphQLNonNull(GraphQLString)},
    }
})

module.exports.CommentType = CommentType;
const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = graphql;

export const ThreadType= new GraphQLObjectType({
    name: 'Thread',
    fields:{
        title: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        userId: {type: new GraphQLNonNull(GraphQLString)},
        topicId: {type: new GraphQLNonNull(GraphQLString)},
    }
})
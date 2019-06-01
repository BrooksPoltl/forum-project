const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = graphql;

const {ThreadType} = require('./ThreadType')
const {CommentType} = require('./CommentType')
const {TopicType} = require('./TopicType')

const ThreadType= new GraphQLObjectType({
    name: 'Thread',
    fields:{
        id: {type: GraphQLString},
        title: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        user: {type: new GraphQLNonNull(UserType)},
        topic: {type: new GraphQLNonNull(TopicType)},
    }
})

module.exports.ThreadType = ThreadType;
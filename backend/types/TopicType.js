const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt
} = graphql;

const TopicType = new GraphQLObjectType({
    name: 'Topic',
    fields:{
        id: {type: GraphQLString},
        name: {type: new GraphQLNonNull(GraphQLString)},
        subscribers: {type: new GraphQLNonNull(GraphQLInt)},
        leader: {type: new GraphQLNonNull(GraphQLString)},
        moderators: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        threads: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
    }
})

module.exports.TopicType = TopicType;
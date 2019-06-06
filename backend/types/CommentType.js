const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull
} = graphql;



const {ThreadType} = require('./ThreadType')

const CommentType= new GraphQLObjectType({
    name: 'Comment',
    fields:{
        id: {type: new GraphQLNonNull(GraphQLID)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        userId: {type: new GraphQLNonNull(GraphQLID)},
        // thread: {type: new GraphQLNonNull(ThreadType),
        //     resolve:(parentValue, args)=>{
        //         return args.thread
        //     }},
    }
})

module.exports.CommentType = CommentType;
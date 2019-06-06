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
const {Comment} = require('../models/models')

const CommentType= new GraphQLObjectType({
    name: 'Comment',
    fields:{
        _id: {type: new GraphQLNonNull(GraphQLID)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        total: {type: new GraphQLNonNull(GraphQLInt), resolve:(parentValue, args)=>{
            let tally = parentValue.upvotes.length - parentValue.downvotes.length
            return tally
        }},
        user: {type: new GraphQLNonNull(GraphQLID)},
        thread: {type: new GraphQLNonNull(ThreadType),
            resolve:async(parentValue, args)=>{
                let result = await Comment.findById(parentValue._id)
                return result.thread
            }},
    }
})//

module.exports.CommentType = CommentType;
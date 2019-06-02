const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const User = require('../models/user')

const {ThreadType} = require('./ThreadType')
const {UserType} = require('./UserType')
const CommentType= new GraphQLObjectType({
    name: 'Comment',
    fields:{
        id: {type: new GraphQLNonNull(GraphQLID)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        upvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        downvotes: {type: new GraphQLNonNull(GraphQLList(GraphQLInt))},
        // user: {type: new GraphQLNonNull(UserType),
        //     resolve:async(parentValue,args, context)=>{
        //         console.log(context)
        //         return User.find({id: context.id })
        //     }
        //     },
        // thread: {type: new GraphQLNonNull(ThreadType),
        //     resolve:(parentValue, args)=>{
        //         return args.thread
        //     }},
    }
})

module.exports.CommentType = CommentType;
const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} = graphql;

const Comment = require('../models/comment');
const Topic = require('../models/topic');
const Thread = require('../models/thread');

const {CommentType} = require('./CommentType')
const {TopicType} = require('./TopicType')
const {ThreadType} = require('./ThreadType')

const UserType = new GraphQLObjectType({
    name: 'User',
    fields:()=>({
        id: {type: new GraphQLNonNull(GraphQLID)},
        firstName: {type: new GraphQLNonNull(GraphQLString)},
        lastName: {type: new GraphQLNonNull(GraphQLString)},
        userName: {type: new GraphQLNonNull(GraphQLString)},
        profilePicture: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        comments: {type: new GraphQLNonNull(GraphQLList(CommentType)),
            resolve:(parentValue,args)=>{
                return Comment.find({id: parentValue.id})
            }
        },
        topics: {type: new GraphQLNonNull(GraphQLList(TopicType)),
            resolve:(parentValue,args)=>{
                return Topic.find({id: parentValue.id})
            }
        },
        threads: {type: new GraphQLNonNull(GraphQLList(ThreadType)),
            resolve:(parentValue,args)=>{
                return Thread.find({id: parentValue.id})
            }
        },   
    })
})

module.exports.UserType = UserType;
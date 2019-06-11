const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} = graphql;

const {User, Topic,Thread, Comment} = require('../models/models');


const UserType = new GraphQLObjectType({
    name: 'User',
    fields:()=>{
        const {TopicType} = require('./TopicType')
        const {ThreadType} = require('./ThreadType')
        const {CommentType} = require('./CommentType')
        return{
        _id: {type: new GraphQLNonNull(GraphQLID)},
        firstName: {type: new GraphQLNonNull(GraphQLString)},
        lastName: {type: new GraphQLNonNull(GraphQLString)},
        userName: {type: new GraphQLNonNull(GraphQLString)},
        profilePicture: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        comments: {type: new GraphQLNonNull(GraphQLList(CommentType)),
            resolve:async(parentValue,args,{user})=>{
                let getComments = await Comment.find({user: user.id})
                return [...getComments]
            }
        },
        topics: {type: new GraphQLNonNull(GraphQLList(TopicType)),
            resolve:async(parentValue,args)=>{
                let result = await User.findById(parentValue._id)
                
                return [...result.topics]
            }
        },

        threads: {type: new GraphQLNonNull(GraphQLList(ThreadType)),
            resolve:async(parentValue,args, {user})=>{
                let getThreads = await Thread.find({user: user.id})
                return [...getThreads]
            }
        },   
        errorMessage: {type: GraphQLString}
    }}
})


module.exports.UserType = UserType;
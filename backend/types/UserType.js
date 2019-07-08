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
            resolve:async(parentValue,args)=>{
                let getComments = await Comment.find({userId: parentValue._id})
                return [...getComments]
            }
        },
        subscriptions: {type: new GraphQLNonNull(GraphQLList(TopicType)),
            resolve:async(parentValue,args)=>{
                let result = await User.findById(parentValue._id);
                let topics = [];
                for(let i = 0; i< result.subscriptions.length; i++){
                    let currentTopic = await Topic.findById(result.subscriptions[i])
                    topics.push(currentTopic)
                };
                console.log(result)
                return topics
            }
        },

        threads: {type: new GraphQLNonNull(GraphQLList(ThreadType)),
            resolve:async(parentValue,args)=>{
                let getThreads = await Thread.find({userId: parentValue._id})
                return getThreads
            }
        },   
        errorMessage: {type: GraphQLString}
    }}
})


module.exports.UserType = UserType;
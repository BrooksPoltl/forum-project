const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} = graphql;

const {Model} = require('../models/models');
const {CommentType} = require('./types')

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
        // comments: {type: new GraphQLNonNull(GraphQLList(CommentType)),
        //     resolve:async(parentValue,args)=>{
        //         let getUser = await Model.User.find({_id:parentValue.id})
        //         getUser = getUser[0];
        //         return getUser.comments
        //     }
        // },
        // topics: {type: new GraphQLNonNull(GraphQLList(TopicType)),
        //     resolve:async(parentValue,args)=>{
        //         let getUser = await Model.User.find({_id:parentValue.id})
        //         getUser = getUser[0];
        //         return getUser.topics
        //     }
        // },
        // threads: {type: new GraphQLNonNull(GraphQLList(ThreadType)),
        //     resolve:async(parentValue,args, {user})=>{
        //         let getUser = await Model.User.find({_id:parentValue.id})
        //         getUser = getUser[0];
        //         return getUser.threads
        //     }
        // },   
    })
})

module.exports.UserType = UserType;
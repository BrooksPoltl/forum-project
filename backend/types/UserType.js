const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} = graphql;

const {User, Topic} = require('../models/models');


const UserType = new GraphQLObjectType({
    name: 'User',
    fields:()=>{
        const {TopicType} = require('./TopicType')
        return{
        _id: {type: new GraphQLNonNull(GraphQLID)},
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
        topics: {type: new GraphQLNonNull(GraphQLList(TopicType)),
            resolve:async(parentValue,args)=>{
                let result = await User.findById(parentValue._id)
                
                return [...result.topics]
            }
        },

        // threads: {type: new GraphQLNonNull(GraphQLList(ThreadType)),
        //     resolve:async(parentValue,args, {user})=>{
        //         let getUser = await Model.User.find({_id:parentValue.id})
        //         getUser = getUser[0];
        //         return getUser.threads
        //     }
        // },   
    }}
})


module.exports.UserType = UserType;
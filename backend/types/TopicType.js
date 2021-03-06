/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
} = graphql;

const { Topic, Thread, User } = require('../models/models');

const TopicType = new GraphQLObjectType({
    name: 'Topic',
    fields: () => {
    const { UserType } = require('./UserType');
    const { ThreadType } = require('./ThreadType');
    return {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        subscribers: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: parentValue => parentValue.users.length,
        },
        userId: { type: new GraphQLNonNull(GraphQLID) },
        users: {
            type: new GraphQLNonNull(GraphQLList(UserType)),
            resolve: async (parentValue) => {
            const result = await Topic.findById(parentValue._id);
            const userIds = result.users;
            let response = [];

            for(let i = 0; i<userIds.length; i++){
                let currentUser = await User.findById(userIds[i])
                response.push(currentUser)
            }
            return response
        },
    },
        threads: {
            type: new GraphQLNonNull(GraphQLList(ThreadType)),
            resolve: async (parentValue) => {
                const result = await Thread.find({topicId: parentValue._id});
                return result 
            },
        },
    };
},
});


module.exports.TopicType = TopicType;

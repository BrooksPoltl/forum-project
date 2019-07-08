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

const { Topic, Thread } = require('../models/models');

const TopicType = new GraphQLObjectType({
    name: 'Topic',
    fields: () => {
    const { UserType } = require('./UserType');
    const { ThreadType } = require('./ThreadType');
    return {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        subscribers: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: parentValue => parentValue.users.length,
        },
        user: { type: new GraphQLNonNull(GraphQLID) },
        users: {
            type: new GraphQLNonNull(GraphQLList(UserType)),
            resolve: async (parentValue) => {
            const result = await Topic.findById(parentValue._id);
            return [...result.users];
        },
    },
        threads: {
            type: new GraphQLNonNull(GraphQLList(ThreadType)),
            resolve: async () => {
                const result = await Thread.find();
                return [...result];
            },
        },
    };
},
});


module.exports.TopicType = TopicType;

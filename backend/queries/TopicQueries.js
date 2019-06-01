const {TopicType}= require('../types/TopicType')
const Topic= require('../models/topic')

const graphql = require('graphql')

const {GraphQLList, GraphQLNonNull, GraphQLString}=graphql;

const getTopicById = {
        type: GraphQLList(TopicType),
        args:{id: {type: new GraphQLNonNull(GraphQLString)}},
        async resolve(parentValue, args){
            return Topic.find({_id: args.id })
        }
    }
const getTopics ={
    type: GraphQLList(TopicType),
    args: {},
    resolve(parentValue, args){
        return Topic.find()
        .then(topics =>{
            return topics.map(topic =>{
                return {...topic._doc, id: topic._id}
            })
        }).catch(err=>{
            throw err;
        })
    }
}

module.exports.getTopics = getTopics;
module.exports.getTopicById = getTopicById;
const {ReplyType}= require('../types/ReplyType')
const Reply= require('../models/reply')

const graphql = require('graphql')

const {GraphQLList, GraphQLNonNull, GraphQLString}=graphql;

const getReplyById = {
        type: GraphQLList(ReplyType),
        args:{id: {type: new GraphQLNonNull(GraphQLString)}},
        async resolve(parentValue, args){
            return Reply.find({_id: args.id })
        }
    }
const getReplies ={
    type: GraphQLList(ReplyType),
    args: {},
    resolve(parentValue, args){
        return Reply.find()
        .then(replies=>{
            return replies.map(reply =>{
                return {...reply._doc, id: reply._id}
            })
        }).catch(err=>{
            throw err;
        })
    }
}

module.exports.getReplys = getReplies;
module.exports.getReplyById = getReplyById;
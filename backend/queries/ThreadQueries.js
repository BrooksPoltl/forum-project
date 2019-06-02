const {ThreadType}=require('../types/ThreadType')
const Thread= require('../models/thread')

const graphql = require('graphql')

const {GraphQLList, GraphQLNonNull, GraphQLID}=graphql;

const getThreadById = {
        type: GraphQLList(ThreadType),
        args:{id: {type: new GraphQLNonNull(GraphQLID)}},
        async resolve(parentValue, args){
            return Thread.find({_id: args.id })
        }
    }
const getThreads ={
    type: GraphQLList(ThreadType),
    args: {},
    resolve(parentValue, args){
        return Thread.find()
        .then(threads=>{
            return threads.map(thread =>{
                return {...thread._doc, id: thread._id}
            })
        }).catch(err=>{
            throw err;
        })
    }
}

module.exports.getThreads = getThreads;
module.exports.getThreadById = getThreadById;
const {TopicType} = require('../types/TopicType')
const Topic= require('../models/topic')
const graphql = require('graphql')
const {GraphQLNonNull, GraphQLString, GraphQLID} = graphql



const createTopic = {
    type: TopicType,
    args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
    },
    async resolve(parentValue, args, {user}){
        if(!user){
            throw Error('Please sign in to create a topic')
        }
        const newTopic = new Topic({
            name: args.name,
            subscribers: 0,
            user: user.id,
            users: [],
            threads: []
        })
        const response = await newTopic.save()
    }
}

// const deleteTopic = {
//     type: TopicType,
//     args: {
//         topic: new GraphQLNonNull(GraphQLID)
//     },
//     async resolve(parentValue,args, {user}){
//         let topic = await Topic.find({_id: args.topic})
//         topic = topic[0]
//         console.log(topic)
//         return Topic.remove({_id: args.topic}).then(result=>{
//             return{...args}
//         }).catch(err=>{
//             throw err
//         })
//     }
// }

module.exports.createTopic = createTopic;
// module.exports.deleteTopic = deleteTopic;
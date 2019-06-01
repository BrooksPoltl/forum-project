const {CommentType}= require('../types/CommentType')
const Comment= require('../models/comment')


const {GraphQLList, GraphQLNonNull, GraphQLString}=graphql;

const getCommentById = {
        type: GraphQLList(CommentType),
        args:{id: {type: new GraphQLNonNull(GraphQLString)}},
        async resolve(parentValue, args){
            return Comment.find({_id: args.id })
        }
    }
const getComments ={
    type: GraphQLList(CommentType),
    args: {},
    resolve(parentValue, args){
        return Comment.find()
        .then(comments=>{
            return comments.map(comment=>{
                return {...comment._doc, id: comment._id}
            })
        }).catch(err=>{
            throw err;
        })
    }
}

module.exports.getComments = getComments;
module.exports.getCommentById = getCommentById;
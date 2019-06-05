const {UserType} = require('../types/UserType')

const graphql = require('graphql')

const User= require('../models/user')


const {GraphQLList, GraphQLNonNull, GraphQLID}=graphql;

const getUserById = {
        type: GraphQLList(UserType),
        args:{id: {type: new GraphQLNonNull(GraphQLID)}},
        async resolve(parentValue, args){
            return User.find({_id: args.id })
        }
    }
const getUsers ={
    type: GraphQLList(UserType),
    args: {},
    resolve(parentValue, args){
        return User.find()
        .then(users =>{
            return users.map(user =>{
                return {...user._doc, id: user._id}
            })
        }).catch(err=>{
            throw err;
        })
    }
}



module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;

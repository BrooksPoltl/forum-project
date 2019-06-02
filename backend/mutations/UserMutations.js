const {UserType} = require('../types/UserType')
const User= require('../models/user')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const graphql = require('graphql')
const {GraphQLNonNull, GraphQLString, GraphQLID} = graphql;

const signUp = {
    type: UserType,
    args: {
        firstName: {type: new GraphQLNonNull(GraphQLString)},
        lastName: {type: new GraphQLNonNull(GraphQLString)},
        userName: {type: new GraphQLNonNull(GraphQLString)},
        profilePicture: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
    },
    async resolve(parentValue, args){
        const password = await bcrypt.hash(args.password, 12);
        const checkUser = await User.find({userName: args.userName})
        const  checkEmail= await User.find({email: args.email})
        const newUser = new User({
            firstName: args.firstName,
            lastName: args.lastName,
            userName: args.userName,
            profilePicture: args.profilePicture,
            email: args.email,
            password: password
            });
        if(checkUser.length == 0 && checkEmail.length == 0){
            const response = await newUser.save();
        }else if(checkUser.length!= 0){
            throw {errorMessage: 'username already exist'}
        }else{
            throw {errorMessage: 'email already exist'}
        }
        
    }
}
const deleteUser = {
    type: UserType,
    args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve(parentValue,args){
        return User.remove({_id: args.id}).then(result=>{
            return{...args}
        }).catch(err=>{
            throw err
        })
    }
}
const login = {
    type: UserType,
    args:{
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
    }
}

module.exports.login = login;
module.exports.signUp = signUp;
module.exports.deleteUser = deleteUser;
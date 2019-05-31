const {UserType} = require('../types/UserType')
const User= require('../models/user')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const graphql = require('graphql')
const {GraphQLNonNull, GraphQLString} = graphql;

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
        const newUser = new User({
            firstName: args.firstName,
            lastName: args.lastName,
            userName: args.userName,
            profilePicture: args.profilePicture,
            email: args.email,
            password: password
            });

        const response = await newUser.save();
        console.log(response)
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
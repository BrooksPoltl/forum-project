
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const graphql = require('graphql')
const {picUrl} = require('../assets/profile')
const {GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList} = graphql;

const {UserType, AuthType} = require('../types/types')

const {User,Comment,Thread,Topic} = require('../models/models')

const signUp = {
    type: UserType,
    args: {
        firstName: {type: new GraphQLNonNull(GraphQLString)},
        lastName: {type: new GraphQLNonNull(GraphQLString)},
        userName: {type: new GraphQLNonNull(GraphQLString)},
        profilePicture: {type: GraphQLString},
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
        if(!newUser.profilePicture){
            newUser.profilePicture = picUrl;
        }
        if(checkUser.length == 0 && checkEmail.length == 0){
            const response = await newUser.save();
            let user = await User.find({userName: args.userName})
            user = user[0]
            return {...args, _id: user._id }
        }else if(checkUser.length!= 0){
            return {errorMessage: 'username already exist'}
        }else{
            return {errorMessage: 'email already exist'}
        }
        
    }
}
const deleteUser = {
    type: UserType,
    args: {},
    async resolve(parentValue,args, {user}){
        return User.remove({_id: user.id}).then(result=>{
            return{...args}
        }).catch(err=>{
            throw err
        })
    }
}
const login = {
    type: AuthType,
    args:{
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
    },
    async resolve(parentValue, args){
        let user = await User.find({email: args.email})
        user = user[0];
        if(!user){
            return {errrorMessage: 'no user by that email'}
        }
        const valid = await bcrypt.compareSync(args.password, user.password)
        if (!valid) {
            return {errorMessage: 'incorrect password'}
      }
      const response = jsonwebtoken.sign({id: user._id,email: user.email}, process.env.SECRET, { expiresIn: '1y' })
      return {_id: user._id, token: response}
    }
}


module.exports.login = login;
module.exports.signUp = signUp;
module.exports.deleteUser = deleteUser;

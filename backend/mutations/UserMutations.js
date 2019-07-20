
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
        username: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
    },
    async resolve(parentValue, args){
        const password = await bcrypt.hash(args.password, 12);
        const newUser = new User({
            username: args.username,
            email: args.email,
            password: password
            });
            let userByUsername = await User.find({username: args.username});
            userByUsername = userByUsername[0];
            let userByEmail = await User.find({email: args.email});
            userByEmail = userByEmail[0];
            if (userByUsername){
                return {...userByUsername._doc, errorMessage: "User already exist"}
            }
            else if(userByEmail){
                return {...userByEmail._doc, errorMessage: "Email already exist"}    
            }
            
            const response = await newUser.save();
            let getNewUser = await User.find({username: args.username})
            getNewUser = getNewUser[0]
            return getNewUser

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

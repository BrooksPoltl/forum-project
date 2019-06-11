import React, {useState, useEffect} from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';
import {SignUpForm} from './signupform'
import {Link} from 'react-router-native'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const REGISTER  = gql`
    mutation signUp($firstName: String!,$lastName: String!, $userName: String!, $profilePicture: String, $email: String!, $password: String!){
        signUp(firstName: $firstName, lastName: $lastName, userName: $userName, profilePicture: $profilePicture, email: $email, password: $password){
            errorMessage
        }
    }
`


export const SignUp = ()=>{
    const [user,setUser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        profilePicture: ''
    });
    const [missing, setMissing] = useState("null")
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = async(register,data) =>{
        if(!user.firstName){
            return setMissing("firstName")
        }else if(!user.lastName){
            return setMissing("lastName")
        }else if(!user.userName){
            return setMissing("userName")
        }else if(!user.email){
            return setMissing("email")
        }else if(!user.password){
            return setMissing("password")
        }
        await register({variables:{firstName: user.firstName, lastName: user.lastName, userName:user.userName,email: user.email,password: user.password,profilePicture: user.profilePicture}});
        setUser({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        profilePicture: ''})
        setMissing("")
        return data
    }
    return (
        <Mutation mutation = {REGISTER}>{(register, {data,error})=>{
            if(data) if(data.signUp.errorMessage == null)return <View style = {styles.container}>
                <Text>Thank you for joining Symposium!</Text> 
                <Link style = {styles.link}to = "/">
                    <Text style = {styles.buttonText}>back to home</Text>
                </Link>
            </View>
            if (!submitted)return(
            <View style = {styles.container}>
            <Text style = {styles.h1}>Symposium</Text>
            <Text style = {styles.h2}>Signup</Text>
            <Text style = {styles.h3}>Join the conversation</Text>
            <SignUpForm error = {error} missing = {missing}user = {user} setUser = {setUser}/>
            {data? data.signUp.errorMessage? data.signUp.errorMessage === "username already exist"?
            <Text style = {styles.errorText}>Username already exist</Text>:
            <Text style = {styles.errorText}>Email already exist</Text>
            :null:null}
            <TouchableOpacity style = {styles.button} onPress = {async()=>{
               await handleSubmit(register, data)
               
            }}>
                    <Text style = {styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        )}}
        </Mutation>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bubbles,
    },
    h1: {
        fontSize: 45,
        color: charlstonGreen,
    },
    h2: {
        fontSize: 30,
        color: charlstonGreen,
    },
    h3: {
        fontSize: 20,
        color: charlstonGreen
    },
    button:{
        borderRadius: 4,
        borderWidth: 2,
        borderColor: charlstonGreen,
        backgroundColor: deFrance,
        height: 40,
        width: wp('80%'),
        margin: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    link:{
        borderRadius: 4,
        borderWidth: 2,
        borderColor: charlstonGreen,
        backgroundColor: deFrance,
        height: 40,
        width: wp('60%'),
        margin: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: '#FFFFFF',
        fontSize: 20,
    },
    errorText:{
        color: 'red',
        padding: 0,
        margin: 0,
    }
})
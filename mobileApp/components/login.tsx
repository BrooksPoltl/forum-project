import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View, TextInput, AsyncStorage } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../assets/designVariables';
import {Link} from 'react-router-native'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createCipher } from 'crypto';





const LOGIN = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            _id
            token
        }
    }
`

export const Login = () =>{
    const [user, setUser] = useState({
        email: "",
        password:""
    })
    const [message, setMessage] = useState()

    const handleSuccess = async(data)=>{
        try{
            await AsyncStorage.setItem('authorization', data.login.token)
        }catch{

        }
    }
    const handleEmail = (email)=>{
        setUser({...user, email: email})
    }
    const handlePassword = (password)=>{
        setUser({...user,password: password})
    }
    return (
        <View>
            <Mutation mutation = {LOGIN}>{(login,{data,error, loading})=>{
                if(loading) return <View><Text>Loading</Text></View>
                if(data)return <View>
                    {console.log(data)} 
                    <Text>{data.login.token}</Text> 
                </View>
                return(
                <View>
                    <Text>Symposium</Text>
                    <Text>Login</Text>
                    <Text>Join the conversation</Text>
                    
                    <TextInput
                        placeholder = "email"
                        value = {user.email}
                        onChangeText = {handleEmail} 
                        placeholderTextColor = {charlstonGreen}
                    />
                    <TextInput
                        placeholder = "Password"
                        value = {user.password}
                        onChangeText = {handlePassword}
                        placeholderTextColor = {charlstonGreen}
                        secureTextEntry = {true}
                    />
                     <TouchableOpacity onPress = {async()=>{
                         if(!user.email){
                             setMessage("please add email")
                         }
                         else if(!user.password){
                             setMessage("please add password")
                         }else{
                            login({variables: user})
                         }
                        }}>
                        {message?<Text>{message}</Text>:null}
                        <Text >Submit</Text>
                    </TouchableOpacity>
                </View>
        )}}  
            </Mutation>
        </View>
    )
}
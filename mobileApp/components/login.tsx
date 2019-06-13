import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View, TextInput } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../assets/designVariables';
import {Link} from 'react-router-native'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const LOGIN = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            _id
        }
    }
`

export const Login = () =>{
    const [user, setUser] = useState({
        email: "",
        password:""
    })
    const handleEmail = (email)=>{
        setUser({...user, email: email})
    }
    const handlePassword = (password)=>{
        setUser({...user,password: password})
    }
    return (
        <View>
            <Mutation mutation = {LOGIN}>{(login,{data,error})=>{
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
                     <TouchableOpacity onPress = {()=>{
                        login(user)
               
                        }}>
                        <Text >Submit</Text>
                    </TouchableOpacity>
                </View>
        )}}  
            </Mutation>
        </View>
    )
}
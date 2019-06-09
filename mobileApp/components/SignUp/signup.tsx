import React, {useState, useEffect} from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';
import {SignUpForm} from './signupform'

export const SignUp = ()=>{
    const [user,setUser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        profilePicture: ''
    });
    return (
        <View>
            <Text>Symposium</Text>
            <Text>Signup</Text>
            <Text>Join the conversation</Text>
            <SignUpForm user = {user} setUser = {setUser}/>
            <TouchableOpacity onPress = {()=>console.log(user)}>
                    <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
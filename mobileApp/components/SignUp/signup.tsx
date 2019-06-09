import React, {useState, useEffect} from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';
import {SignUpForm} from './signupform'

export const SignUp = ()=>{
    const [user,setUser] = useState({});
    return (
        <View>
            <Text>Signup for Symposium</Text>
            <Text>Join the conversation</Text>
            <SignUpForm setUser = {setUser}/>
            <TouchableOpacity>
                    <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
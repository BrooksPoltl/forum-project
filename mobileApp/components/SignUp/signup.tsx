import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';
import {SignUpForm} from './signupform'

export const SignUp = ()=>{
    return (
        <View>
            <Text>Signup</Text>
            <SignUpForm />
        </View>
    )
}
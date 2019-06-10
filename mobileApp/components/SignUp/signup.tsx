import React, {useState, useEffect} from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';
import {SignUpForm} from './signupform'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        <View style = {styles.container}>
            <Text style = {styles.h1}>Symposium</Text>
            <Text style = {styles.h2}>Signup</Text>
            <Text style = {styles.h3}>Join the conversation</Text>
            <SignUpForm user = {user} setUser = {setUser}/>
            <TouchableOpacity style = {styles.button} onPress = {()=>console.log(user)}>
                    <Text style = {styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    buttonText:{
        color: '#FFFFFF',
        fontSize: 20,
    },
})
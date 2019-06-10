import React, {useState} from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    ScrollView, 
    } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const SignUpForm = (props)=>{
    const handleFirstName = (firstName)=>{
        props.setUser({...props.user, firstName: firstName})
    }
    const handleLastName = (lastName)=>{
        props.setUser({...props.user, lastName: lastName})
    }
    const handleUserName = (userName)=>{
        props.setUser({...props.user, userName: userName})
    }
    const handleEmail = (email)=>{
        props.setUser({...props.user, email: email})
    }
    const handlePassword = (password)=>{
        props.setUser({...props.user, password: password})
    }
    const handlePicture = (profilePicture)=>{
        props.setUser({...props.user, profilePicture: profilePicture})
    }
    
    return (
        <ScrollView style = {styles.scrollContainer}> 
            <View>
                <View>
                    <TextInput
                        placeholder = "First Name"
                        value = {props.user.firstName}
                        onChangeText = {handleFirstName}
                        style = {styles.input}
                    />
                    <TextInput
                        placeholder = "Last Name"
                        value = {props.user.lastName}
                        onChangeText = {handleLastName}
                        style = {styles.input}
                    />
                    <TextInput
                        placeholder = "username"
                        value = {props.user.userName}
                        onChangeText = {handleUserName}
                        style = {styles.input}
                    />
                    <TextInput
                        placeholder = "Email"
                        value = {props.user.email}
                        onChangeText = {handleEmail}
                        style = {styles.input}
                    />
                    <TextInput
                        placeholder = "Password"
                        value = {props.user.password}
                        onChangeText = {handlePassword}
                        style = {styles.input}
                    />
                    <TextInput
                        placeholder = "Profile Picture"
                        value = {props.user.profilePicture}
                        onChangeText = {handlePicture}
                        style = {styles.input}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollContainer: {
        borderRadius: 4,
        borderWidth: 3,
        borderColor: '#d6d7da',
        width: wp('100%'),
    },
    input:{
        height: 40,
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
    }
})

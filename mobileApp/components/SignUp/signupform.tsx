import React, {useState} from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    View,
    ScrollView, 
    ShadowPropTypesIOS} from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';

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
        <ScrollView>
            <View>
                <View>
                    <TextInput
                        placeholder = "First Name"
                        value = {props.user.firstName}
                        onChangeText = {handleFirstName}
                    />
                    <TextInput
                        placeholder = "Last Name"
                        value = {props.user.lastName}
                        onChangeText = {handleLastName}
                    />
                    <TextInput
                        placeholder = "username"
                        value = {props.user.userName}
                        onChangeText = {handleUserName}
                    />
                    <TextInput
                        placeholder = "Email"
                        value = {props.user.email}
                        onChangeText = {handleEmail}
                    />
                    <TextInput
                        placeholder = "Password"
                        value = {props.user.password}
                        onChangeText = {handlePassword}
                    />
                    <TextInput
                        placeholder = "Profile Picture"
                        value = {props.user.profilePicture}
                        onChangeText = {handlePicture}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
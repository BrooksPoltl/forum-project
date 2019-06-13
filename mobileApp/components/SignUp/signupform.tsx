import React, {useState} from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    ScrollView, 
    } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
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
        <KeyboardAwareScrollView style = {styles.scrollContainer}> 
            <View>
                <View>
                    <View style = {styles.inputContainer}>
                        <Text style = {styles.required}>*</Text>
                        <TextInput
                            placeholder = "First Name"
                            value = {props.user.firstName}
                            onChangeText = {handleFirstName}
                            placeholderTextColor = {charlstonGreen}
                            style = {props.missing === "firstName"?styles.invalidInput:styles.input}
                        />
                    </View>
                    <View style = {styles.inputContainer}>
                    <Text style = {styles.required}>*</Text>
                    <TextInput
                        placeholder = "Last Name"
                        value = {props.user.lastName}
                        onChangeText = {handleLastName}
                        placeholderTextColor = {charlstonGreen}
                        style = {props.missing === "lastName"?styles.invalidInput:styles.input}
                    />
                    </View>
                    <View style = {styles.inputContainer}>
                    <Text style = {styles.required}>*</Text>
                    <TextInput
                        placeholder = "username"
                        value = {props.user.userName}
                        onChangeText = {handleUserName}
                        placeholderTextColor = {charlstonGreen}
                        style = {props.missing === "userName"?styles.invalidInput:styles.input}
                    />
                    </View>
                    <View style = {styles.inputContainer}>
                    <Text style = {styles.required}>*</Text>
                    <TextInput
                        placeholder = "Email"
                        value = {props.user.email}
                        onChangeText = {handleEmail}
                        placeholderTextColor = {charlstonGreen}
                        style = {props.missing === "email"?styles.invalidInput:styles.input}
                    />
                    </View>
                    <View style = {styles.inputContainer}>
                    <Text style = {styles.required}>*</Text>
                    <TextInput
                        placeholder = "Password"
                        value = {props.user.password}
                        onChangeText = {handlePassword}
                        placeholderTextColor = {charlstonGreen}
                        secureTextEntry = {true}
                        style = {props.missing === "password"?styles.invalidInput:styles.input}
                    />
                    </View>

                    <View style = {styles.inputContainer}>
                    <TextInput
                        placeholder = "Profile Picture"
                        value = {props.user.profilePicture}
                        onChangeText = {handlePicture}
                        placeholderTextColor = {charlstonGreen}
                        style = {styles.input}
                    />
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({
    scrollContainer: {
        width: wp('100%'),
    },
    input:{
        height: 40,
        margin: 10,
        borderBottomColor: deFrance,
        borderBottomWidth: 3,
        backgroundColor: bubbles,
        padding: 10,
        width: wp('90%')
    },
    invalidInput:{
        height: 40,
        margin: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 3,
        backgroundColor: bubbles,
        padding: 10,
        width: wp('90%')
    },
    inputContainer: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    required:{
        fontSize: 20,
        color: 'red',
    }
})

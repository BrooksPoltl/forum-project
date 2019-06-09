import React, {useState} from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    View,
    ScrollView } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';

export const SignUpForm = (setUser)=>{
       
    return (
        <ScrollView>
            <View>
                <View>
                    <TextInput
                        placeholder = "First Name"

                    />
                    <TextInput
                        placeholder = "Last Name"

                    />
                    <TextInput
                        placeholder = "username"

                    />
                    <TextInput
                        placeholder = "Email"
                    />
                    <TextInput
                        placeholder = "Password"

                    />
                    <TextInput
                        placeholder = "Profile Picture"
                        
                    />
                </View>
            </View>
        </ScrollView>
    )
}
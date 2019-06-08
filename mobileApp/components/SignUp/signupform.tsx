import React, {useState} from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    View,
    ScrollView } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';

export const SignUpForm = ()=>{
        const [user,setUser] = useState({});
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
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../assets/designVariables';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Link} from 'react-router-native'


export const HomePage = ()=>{
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Symposium</Text>
            <View style = {styles.buttonContainer}>
                <Link style = {styles.buttons} to = "/login">
                    <Text style = {styles.buttonText}>login</Text>
                </Link>
                <Link style = {styles.buttons} to = "/signup">
                    <Text style = {styles.buttonText}>sign up</Text>
                </Link>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: charlstonGreen,
        alignItems: 'center',
        width: wp('100%'),
        backgroundColor: bubbles,
        padding: 50
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 300,
        borderColor: charlstonGreen,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp('100%')
    },
    title:{
        fontSize: 45,
        color: charlstonGreen,
    },
    buttons:{
        borderRadius: 4,
        borderWidth: 2,
        borderColor: charlstonGreen,
        backgroundColor: deFrance,
        height: 40,
        margin: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: '#FFFFFF',
        fontSize: 20,
    },
    linkStyle:{
        width:wp('100%'),

    }
  });
  
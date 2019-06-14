import React, {useState} from 'react'

import { StyleSheet,TouchableOpacity, Text, View, TextInput, AsyncStorage } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../../assets/designVariables';
import {Link, Redirect} from 'react-router-native'

import gql from 'graphql-tag'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export const TimeLine = ()=>{
    return (
        <View>
            <Text>Timeline</Text>
        </View>
    )
}
import React, {useState} from 'react'
import { StyleSheet,TouchableOpacity, Text, View, TextInput, AsyncStorage } from 'react-native';

import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const MY_TIMELINE = gql`
{
	users{
		userName
    topics{
      threads{
        title
      }
    }
  }
}
`

export const SubscriptionTimeline = ()=>{
    return (
        <View>
            
        </View>
    )
}
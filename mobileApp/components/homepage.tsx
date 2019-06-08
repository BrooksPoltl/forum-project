import React, {useState} from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
// homepage
export const HomePage = ()=>{
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>Homepage</Text>
            <Button title = 'login' onPress = {()=> setCount(count+1)} />
            <Button title = 'sign up' onPress = {()=> setCount(count+1)} />
        </View>
    )
}
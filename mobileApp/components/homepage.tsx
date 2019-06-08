import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import {charlstonGreen, deFrance, bubbles} from '../assets/designVariables';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// homepage
export const HomePage = ()=>{
    const [count, setCount] = useState(0);
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Symposium</Text>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.buttons} onPress = {()=> setCount(count+1)}>
                    <Text style = {styles.buttonText}>login</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttons} onPress = {()=> setCount(count+1)}>
                    <Text style = {styles.buttonText}>sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        color: charlstonGreen,
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
        color: bubbles,
        fontSize: 20,
    },
  });
  
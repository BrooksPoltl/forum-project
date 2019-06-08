import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {charlstonGreen, bubbles} from './assets/designVariables';
import {HomePage} from './components/homepage'
export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

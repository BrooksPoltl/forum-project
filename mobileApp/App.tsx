import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CharlstonGreen, bubbles} from './assets/designVariables';
import {HomePage} from './components/homepage'
export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
      <Text>Check</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bubbles,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 function EndGame() {
  return (
    <View style={styles.container}>
      <Text>EndGame</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default EndGame;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
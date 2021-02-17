import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

 function StartGame(props) {
  return (
    <View style={styles.container}>
      <Text>Start Game</Text>
      <Button title="Play Game" 
        onPress={()=>props.navigation.navigate('PlayGame')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default StartGame;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
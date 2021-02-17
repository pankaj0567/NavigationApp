import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

 function PlayGame(props) {
  return (
    <View style={styles.container}>
      <Text>PlayGame</Text>
      <Button
        title="End Game"
        onPress={()=>props.navigation.navigate('EndGame')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default PlayGame;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartGame from './StartGame';
import PlayGame from './PlayGame';
import EndGame from './EndGame';

const Stack = createStackNavigator();

 function Index() {
  return (
    //   <NavigationContainer>
          <Stack.Navigator initialRouteName="StartGame">
            <Stack.Screen name="StartGame" component={StartGame} />
            <Stack.Screen name="PlayGame" component={PlayGame} />
            <Stack.Screen name="EndGame" component={EndGame} />
            </Stack.Navigator>
    //    </NavigationContainer>
  );
}

export default Index;
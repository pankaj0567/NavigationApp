import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from '../About';
import Home from '../Home';

const Drawer = createDrawerNavigator();

 function RootNavigation() {
  return (
    <NavigationContainer>
         <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
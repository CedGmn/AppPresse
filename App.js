import { initializeApp } from "firebase/app";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Conponant/Home';
import LoginScreen from './Conponant/Login';
import JournauxScreen from './Conponant/Journaux';
import CommentScreen from './Conponant/Comment';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

//const app = initializeApp(firebaseConfig);
const Stack = createStackNavigator();

export default  function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Journaux"  component={JournauxScreen} />
        <Stack.Screen name="Comment"  component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




// export default function App() {
//  useEffect(() => {
  
//     initializeApp(firebaseConfig);
//   }, 
//   []
//   );
  
  
 
//}

 

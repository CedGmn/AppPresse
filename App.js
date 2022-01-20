import { initializeApp } from "firebase/app";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './Conponant/Landing';
import HomeScreen from './Conponant/Home';
import LoginScreen from './Conponant/Login';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm0_dMFVTXcxEfxRdRH4Oy3cI9GcqyjX8",
  authDomain: "presseapp-f641d.firebaseapp.com",
  projectId: "presseapp-f641d",
  storageBucket: "presseapp-f641d.appspot.com",
  messagingSenderId: "213057471056",
  appId: "1:213057471056:web:cd434a30e6d68229b2c755",
  measurementId: "G-ZXN0RHRYH9"
};

const app = initializeApp(firebaseConfig);


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
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

 

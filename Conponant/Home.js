import { ThemeProvider } from '@react-navigation/native';
import React, { Component } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import JournauxScreen, { jounalType } from './Journaux';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export var JournalType = {
  Canard: 1,
  LeParisien : 2
};
const HomeScreen = () => {
  const navigation = useNavigation()
  const auth = getAuth();
 
   
    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
  
    const redirectJournaux = () => {
      navigation.navigate('Journaux')
    }
  
    return (
      <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {redirectJournaux()}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>journaux</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  })

export default HomeScreen

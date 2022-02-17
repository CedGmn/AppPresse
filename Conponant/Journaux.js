import { useNavigation } from '@react-navigation/core'
import { getApp } from "firebase/app";
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {Image} from 'react-native';
import { getStorage,ref, uploadBytes, getDownloadURL, StorageReference   } from "firebase/storage";
import { initializeApp } from "firebase/app";
import CommentScreen from './Comment';

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
export const firestoreDb = getStorage(app);
  
//var storag e = firebase.storage();
const JournauxScreen = () => {
  const navigation = useNavigation()
  const [imageUrl, setImageUrl] = useState(undefined);
  
    useEffect(() => {
          getDownloadURL( ref(firestoreDb, 'gs://presseapp-f641d.appspot.com/canard.jpg'))
          .then((url) => {
            setImageUrl(url);
          })
          .catch((e) => console.log('Errors while downloading => ', e));
      }, []);

      const redirectComment = () => {
        navigation.navigate('Comment')
      }

return (
       
      <><Image style={{ width: 244, height: 380 }} source={{ uri: imageUrl }} /><View>

      <View style={styles.buttonContainer}>
      </View>
      <TouchableOpacity
          onPress={redirectComment}
          style={styles.button}
/>

  </View>
</>
     

      )

}
export default JournauxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  }})
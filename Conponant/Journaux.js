import { useNavigation } from '@react-navigation/core'
import { getApp } from "firebase/app";
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {Image} from 'react-native';
import { getStorage,ref, uploadBytes, getDownloadURL, StorageReference   } from "firebase/storage";
import { initializeApp } from "firebase/app";
import CommentScreen from './Comment';
import { JournalType } from './Home';
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
export var choice;
var imageNuber = 1;

const JournauxScreen = () => {
  const navigation = useNavigation()
  
const [imageUrl,setImageUrl] = useState(
  {
    urls : []
  }
)
  const allInputs = new  Array();
    useEffect(() => {
      allInputs[1] = 'gs://presseapp-f641d.appspot.com/canard.jpg';
      allInputs[2] = 'gs://presseapp-f641d.appspot.com/parisien.750.jpg';
      uploadFile(allInputs[1],0 );

      uploadFile(allInputs[2],1);

     }, []); 

     async function uploadFile(ggCount, index) { 
      console.log("uploadFile",imageUrl);
       const tata =  getDownloadURL( ref(firestoreDb, ggCount))
        .then((url) => {
          imageUrl.urls.push(url);
            console.log(imageUrl);
            setImageUrl({ urls : imageUrl.urls});
          })
        .catch((e) => console.log('Errors while downloading => ', e));
       
     }
    function redirectComment(intChoice) {
      console.log("switch !" ,intChoice)
      switch(intChoice){
        case 0 :
          choice = JournalType.Canard;
          console.log("Canard !" ,choice)
          break;
        case 1 :
          choice = JournalType.LeParisien;
          console.log("parisien !" ,choice);
      }
        navigation.navigate('Comment');
    }
    
    const JounalChoice = (intChoice) => {

    }

return (
  <View>
  
      {imageUrl.urls.map((url ,imageNuber) => {
        
        console.log('imagenuber', imageNuber);
        return <View key={imageNuber}>
         <Image  id = 'myimg1' style={{ width: 244, height: 380 }} source = {{uri : url}}></Image> 
         <TouchableOpacity
           onPress={() => redirectComment(imageNuber)}
          style={styles.button}/>
       </View>  
      })}
  </View>
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
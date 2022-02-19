import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { getStorage,ref, uploadBytes, getDownloadURL, StorageReference   } from "firebase/storage";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
//import db from "./Home"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { async } from '@firebase/util';

const firebaseConfig = {
  apiKey: "AIzaSyBm0_dMFVTXcxEfxRdRH4Oy3cI9GcqyjX8",
  authDomain: "presseapp-f641d.firebaseapp.com",
  projectId: "presseapp-f641d",
  storageBucket: "presseapp-f641d.appspot.com",
  messagingSenderId: "213057471056",
  appId: "1:213057471056:web:cd434a30e6d68229b2c755",
  measurementId: "G-ZXN0RHRYH9"
};
export const  app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const CommentScreen = () => {
  var post;
  const [commentUser, setUserComment] = useState('');
  var datePost;
  
  useEffect(() => {
    
    getData();

 }, [])

  const postComment = () => {

    db.collection("Post")
    .add({
      ID : "Canard",
      Comment: commentUser,
      DateComment : new Date().toLocaleString(),
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  
    }

  const getData = async payload =>{

    const q = query(collection(db,"Post"), where("ID", "==", "Canard"));
    const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {

        const result = doc.data().Comment; 
        const str = JSON.stringify(result);
        const date = JSON.stringify(doc.data().DateComment);
      
      console.log(date);
      post = str;
      datePost = date;
      console.log("post:",str);
              
      var piano = document.createElement("li");
      piano.id = "surdoué";
      post = post.replaceAll('"',' ');
      datePost = datePost.replaceAll('"',' ');
      piano.textContent = post +" "+ datePost; 
      document.getElementById("commentList").appendChild(piano);
      });
  }

    return(
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
           <div>
        <ul id="commentList">
        </ul>
    </div>

      <View style={styles.inputContainer}>

         <TextInput
            placeholder="Comment here"
            value={commentUser}
            onChangeText={text => setUserComment(text)}
            style={styles.input}
          />     

      </View>

           <View style={styles.buttonContainer}>

           <TouchableOpacity
          onPress={postComment}
          style={styles.button}
          />
       
</View>
      </KeyboardAvoidingView>
    )

}
export default CommentScreen;

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
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    }
})
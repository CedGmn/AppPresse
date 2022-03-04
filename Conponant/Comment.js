import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { getStorage,ref, uploadBytes, getDownloadURL, StorageReference   } from "firebase/storage";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
//import db from "./Home"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { async, stringify } from '@firebase/util';
import { JournalType } from './Home';
import { choice } from './Journaux';

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
  var querySnapshot;
  const [commentUser, setUserComment] = useState('');
  const [commentList, setCommentList] = useState({
    journalData : []
  });
  var str;
  var date;
  var i =0;

  useEffect(() => {
    getData();

 }, [commentUser])

  const postComment = () => {
    switch(choice){
      case JournalType.Canard:
            //on snaphot add for refresh data
    db.collection("Post")
    .add({
      ID : "Canard",
      Comment: commentUser,
      DateComment : new Date().toLocaleString(),
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
        case JournalType.LeParisien:
    }

  
    }

  const getData = async payload =>{
    
    switch(choice){

      case JournalType.Canard:

      const q = query(collection(db,"Post"), where("ID", "==", "Canard"));
      querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
          
            var result = doc.data().Comment; 
            var comment = JSON.stringify(result);
            var date = JSON.stringify(doc.data().DateComment);
            var completeComment = {date, comment};

            commentList.journalData.push(completeComment);
            setCommentList({journalData : commentList.journalData})
            console.log('commentList',commentList);
      });

        break;
        case JournalType.Canard:
          break;  
    }
  }

    return(
 
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      {commentList.journalData?.map((comment) => {
        i++;
        console.log('comm',comment);
        return <View key ={i} >
        <Text style={styles.buttonText}>{comment.date}</Text>
        <Text style={styles.buttonText}>{comment.comment}</Text>
       </View>  
      })}

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
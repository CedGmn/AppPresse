import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { getStorage,ref, uploadBytes, getDownloadURL, StorageReference   } from "firebase/storage";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
//import db from "./Home"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { async } from '@firebase/util';
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
    commentLists : [],
    dateList : []
  });
  var datePost;
  var result;
  var str;
  var date;
  
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
    
             result = doc.data().Comment; 
             str = JSON.stringify(result);
             date = JSON.stringify(doc.data().DateComment);
             commentList.dateList.push(date)
            setCommentList({dateList  : commentList.dateList});
            commentList.commentLists.push(str);
            setCommentList({commentLists  : commentList.commentLists});
          });

          post = str;
          datePost = date;
        
          // var piano = document.createElement("li");
          // piano.id = "surdoué";
          // post = post.replaceAll('"',' ');
          // datePost = datePost.replaceAll('"',' ');
          // piano.textContent = post +" "+ datePost; 
          // document.getElementById("commentList").appendChild(piano);
          // 
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
      {commentList.commentLists?.map((commentList, nbr) => {
        
        return <View key ={nbr} >
        <Text key = {nbr} style={styles.buttonText}>{commentList}</Text>
       </View>  
      })}
      {commentList.dateList?.map((dateList, ro) => {
        console.log('date', dateList);
        return <Text key ={ro} style={styles.buttonText}>{dateList}</Text>
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
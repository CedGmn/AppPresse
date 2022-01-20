import { ThemeProvider } from '@react-navigation/native';
import React, { Component } from 'react'
import {View, Button, TextInput} from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp(){
        const{email, password} = this.state;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password,name)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder = "email"
                    onChangeText = {(email) => this.setState({email})}
                />
                <TextInput
                    placeholder = "password"
                    secureTextEntry={true}
                    onChangeText = {(password) => this.setState({password})}
                /> 
                <Button
                    onPress = {() => this.onSignUp()}
                    title = "Sign In"
                />                               
            </View>
        )
    }
}

export default Login

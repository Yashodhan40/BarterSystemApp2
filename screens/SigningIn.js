import * as React from 'react';
import {View,Text,TextInput,TouchableOpacity,KeyboardAvoidingView,StyleSheet, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

 export default class WelcomeScreen extends React.Component{
     constructor(){
         super();
         this.state={
             email:'',
             password:''
         }
     }
     signUp=(email,password)=>{
         firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
             return Alert.alert("Successfully Signed Up");
         }).catch((error)=>{
             var errorCode = error.code;
             var errorMessage = error.message;
             Alert.alert(errorMessage); 
         })
     }

     signIn=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
            return Alert.alert("Successfully Signed In");
        }).catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorMessage); 
        })
    }
     render(){
        return(
            <View>
                <KeyboardAvoidingView behavior="padding"enabled>

                <TextInput
                    style={styles.e}
                    placeholder="email Id"
                    keyboardType="email-address"
                    onChangeText={text=>{this.setState({email:text})}}
                    value={this.state.email}
                />
                <TextInput
                style={styles.p}
                placeholder="password"
                secureTextEntry={true}
                onChangeText={text=>{this.setState({password:text})}}
                value={this.state.password}
                />

                <TouchableOpacity 
                style={styles.a}
                onPress={()=>{this.signUp(this.state.email,this.state.password)}}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.b}
                onPress={()=>{this.signIn(this.state.email,this.state.password)}}>
                    <Text>Sign In</Text>
                </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
        )
     }   
    
}
const styles = StyleSheet.create({
    a:{
        backgroundColor:'orange',
        alignSelf:'center',
        width:90,
        borderColor:'green',
        borderWidth:2,
        borderRadius:5,
        paddingLeft:20
    },
    b:{
        backgroundColor:'red',
        alignSelf:'center',
        width:90,
        borderColor:'green',
        borderWidth:2,
        borderRadius:5,
        paddingLeft:20,
        marginTop:10
    },
    e:{
        marginTop:150,
        //color:'grey',
        backgroundColor:'#2299FF',
        width:290,
        alignSelf:'center'
    },
    p:{
        marginTop:20,
        backgroundColor:"#2299FF",
        width:290,
        alignSelf:'center',
        marginBottom:20
    }
})  
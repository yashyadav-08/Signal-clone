import React,{useState,useLayoutEffect} from 'react';
import { View,Text,StyleSheet,StatusBar,KeyboardAvoidingView} from 'react-native';
import { Button,Input } from 'react-native-elements';
import {auth} from '../firebase';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

function RegisterScreen({navigation}) {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [imageUrl,setImageUrl] = useState("")


useLayoutEffect(()=>{
  navigation.setOptions({
    headerBackTitle:'Back to Login',
  });
},[navigation])

const register = ()=>{
  auth.createUserWithEmailAndPassword(email,password)
  .then((authUser)=>{
    authUser.user.updateProfile({
      displayName:name,
      photoURL:imageUrl || "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    })
  }).catch((error) => alert(error.message))
}

  return (
   
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style='light' />
        <Text style={{marginBottom:50}}>Create a Signal Account</Text>

    <View style={styles.inputContainer} >

    <Input
    placeholder='Full Name'
     value={name}
     type='text'
     onChangeText={(text)=>setName(text)}
    />

    <Input
    placeholder='Email'
     value={email}
     type='email'
     onChangeText={(text)=>setEmail(text)}
    />

    <Input
    placeholder='Password'
     value={password}
     type='password'
     secureTextEntry
     onChangeText={(text)=>setPassword(text)}
    />

    <Input
    placeholder='ImageUrl'
     value={imageUrl}
    onSubmitEditing={register}
     onChangeText={(text)=>setImageUrl(text)}
    />
    </View>
    <Button 
    containerStyle={styles.button}
    title='Register'
    onPress={register}
    raised
    />
    <View style={{height:10}} />
    </KeyboardAvoidingView>
        
   
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  padding:10,
  backgroundColor:"white"
  },
  button:{
   width:200,
   marginTop:10
  },
  inputContainer:{
    width:300
  }
})
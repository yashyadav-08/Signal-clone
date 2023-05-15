import React,{useEffect, useState} from "react";
import { View,Text,StyleSheet,KeyboardAvoidingView,StatusBar } from "react-native";
import { Button,Image,Input } from "react-native-elements";
import logo from '../assets/signal-logo.png';
import {auth} from '../firebase';


const LoginScreen = ({navigation})=>{

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

useEffect(()=>{
  const unsubscribe= auth.onAuthStateChanged((authUser)=>{
    console.log(authUser)
    if(authUser){
      navigation.replace('Home')
    }
  })

  return unsubscribe;
},[]);

const signIn = ()=>{
  auth.signInWithEmailAndPassword(email,password)
  .catch((error)=> alert(error) )
}
    
    return(
       
  <KeyboardAvoidingView style={styles.container}>
  <View style={{flexDirection:'row',position:'absolute',paddingBottom:310}} >

  <Image 
  source={logo}
  style={{height:200,width:200}}

  />
  </View>
  <View style={styles.input} >

  <Input
   placeholder='enter the Email' 
   value={email}
   type="email"
   autoFocus
   onChangeText={(text)=>setEmail(text)}
   />
  <Input 
  placeholder='enter the password'
  value={password}
  type="password"
 secureTextEntry
  onChangeText={(text)=>setPassword(text)}
  onSubmitEditing={signIn}
  />
  </View>


 <View style={{width:200}} >
  <Button onPress={signIn} title="Login" />
 </View>
<View style={{paddingTop:34,width:200}} >

  <Button type="outline" onPress={()=>navigation.navigate("Register")} title="Register" />
</View>


  <StatusBar style='light' />
  </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     padding:12
    },
    input:{
        width:300,
        marginTop:160
    }
   
})

export default LoginScreen;
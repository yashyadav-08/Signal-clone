import { View,SafeAreaView,StyleSheet,ScrollView,Text,TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from '../screens/CustomListItem';
import React,{useEffect, useState} from "react";
import {auth,db} from '../firebase';
import { useLayoutEffect } from "react";
import {AntDesign,SimpleLineIcons} from "@expo/vector-icons";
import { doc } from "firebase/firestore";
import ChatScreen from "./ChatScreen";

const HomeScreen = ({navigation}) =>{
const [chats,setChats] = useState([])

const signOutUser = ()=>{
    auth.signOut().then(()=>{
        navigation.replace("Login")
    });
};


useEffect(()=>{
 const unsubscribe = db.collection("chats").onSnapshot(snapshot =>(
    setChats(snapshot.docs.map(doc =>({
     id:doc.id,
     data:doc.data()
})))
 ))
},[])

useLayoutEffect(()=>{
navigation.setOptions({
    title:"signal",
    headerStyle:{backgroundColor:"#fff"},
    headerTitleStyle:{color:"black"},
    headerTintColor:"black",
    headerLeft:() =>(
        <View style={{marginLeft:20}}>
            <TouchableOpacity onPress={signOutUser} activeOpacity={0.5} >
            <Avatar rounded source={{uri:auth?.currentUser?.photoURL}} />
                
            </TouchableOpacity>
        </View>
        ),
        headerRight:()=>(
            <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              width:80,
              marginRight:20,
            }} >
          <TouchableOpacity>
            <AntDesign name="camerao" size={24} color='black' />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("AddChat")} >
                <SimpleLineIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
            </View>
        )
});
},[navigation]);


const enterChat = (id,chatName)=>{
  navigation.navigate("Chat",{
    id:id,
    chatName:chatName,
  })
}

return(
    <SafeAreaView>
        <ScrollView style={styles.container} >
            {chats.map(({id,data:{chatName}})=>(
                <CustomListItem key={id} id={id} chatName={chatName}
                enterChat={enterChat}  />

            ))}
        </ScrollView>
    </SafeAreaView>
)


}



export default HomeScreen;
 
const styles = StyleSheet.create({
 container:{
    height:"100%",
 }
})
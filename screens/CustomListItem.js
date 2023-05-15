import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import { Avatar,ListItem } from "react-native-elements";
import { db } from "../firebase";


const CustomListItem = ({id,chatName,enterChat})=>{

 const [chatMessages,setChatMessages] = useState([]);

 useEffect(()=>{
    const unsubscribe = db.collection('chats').doc(id).collection('messages').
    orderBy('timestamp','desc').onSnapshot(snapshot =>
        setChatMessages(snapshot.docs.map(doc => doc.data()))
    );
    return unsubscribe;
 })

    return(
        <ListItem onPress={()=>enterChat(id,chatName)} key={id} bottomDivider>
            <Avatar
            rounded
            source={{
                uri:
                chatMessages?.[0]?.photoURL ||
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:'800'}}>
                   {chatName}
                </ListItem.Title>
                <ListItem.Subtitle 
                ellipsizeMode="tail"
                numberOfLines={1} >
                  {chatMessages?.[0]?.displayName}:{chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )

}

export default CustomListItem;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';

export default function App() {
  const Stack = createNativeStackNavigator(); 

 const globalScreenOptions = {
  headerStyle:{backgroundColor:'#2C6BED'},
  HeaderTitleStyle:{color:"white"},
  headerTintColor:"white",
 };

  return (
    <NavigationContainer>
     <Stack.Navigator
    //  initialRouteName='Home'
      screenOptions={globalScreenOptions} >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='AddChat' component={AddChatScreen} />
      <Stack.Screen name='Chat' component={ChatScreen} />
      
     </Stack.Navigator>
     <StatusBar style='auto' />
     </NavigationContainer>
     
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

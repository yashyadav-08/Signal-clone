import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/firestore';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDe5_jDl6Tf_BLOjr6UCWKqtj6jRzycUwM",
    authDomain: "psychic-torus-352608.firebaseapp.com",
    projectId: "psychic-torus-352608",
    storageBucket: "psychic-torus-352608.appspot.com",
    messagingSenderId: "1072786384682",
    appId: "1:1072786384682:web:1b24b10fca4a35c0aae053"
  };

 let app;
 if(firebase.apps.length===0){
  app = firebase.initializeApp(firebaseConfig)
 }else{
  app = firebase.app()
 }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db,auth};
  export default firebase;

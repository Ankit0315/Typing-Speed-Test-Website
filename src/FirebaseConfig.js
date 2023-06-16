import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-IBSoETn2NGV1Bn0O5ZUy4LVkX1zEghg",
    authDomain: "typing-website-project.firebaseapp.com",
    projectId: "typing-website-project",
    storageBucket: "typing-website-project.appspot.com",
    messagingSenderId: "68922512620",
    appId: "1:68922512620:web:e747b5badc074b3fd981c9",
    measurementId: "G-39G1FH00CM"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const db = firebase.firestore();
  export  {auth,db}
 
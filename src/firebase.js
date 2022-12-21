import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaP4LCs-CGKCapQ7pYilNb784Yvl5GHb8",
    authDomain: "linkedin-clone-f286c.firebaseapp.com",
    projectId: "linkedin-clone-f286c",
    storageBucket: "linkedin-clone-f286c.appspot.com",
    messagingSenderId: "785976381068",
    appId: "1:785976381068:web:7f55aa8af8ef962cf375a9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  



  export {db, auth };
import firebase from 'firebase'
import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyD__PU7anna1-Cd_AKg0EaoFdJ0xda0j3g",
    authDomain: "autify-network.firebaseapp.com",
    projectId: "autify-network",
    storageBucket: "autify-network.appspot.com",
    messagingSenderId: "675389843849",
    appId: "1:675389843849:web:0b6160b6504d5409011958",
    measurementId: "G-FYC79F5M09"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(fire);


  export {db};

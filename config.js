import firebase from 'firebase'
require ('@firebase/firestore') 
  var firebaseConfig = {
    apiKey: "AIzaSyAuJo36Y8hlke-ZrXdh2XKbHh9NEkuyeNs",
    authDomain: "employment-970e3.firebaseapp.com",
    databaseURL: "https://employment-970e3.firebaseio.com",
    projectId: "employment-970e3",
    storageBucket: "employment-970e3.appspot.com",
    messagingSenderId: "908142181542",
    appId: "1:908142181542:web:d432067fd8fc0a55654867",
    measurementId: "G-ZF4F9NFJKF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore() 

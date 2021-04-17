import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnKCNl5q8ub07JaL6atmZ0gDux8wWNR9k",
    authDomain: "buzzer-button-fbfaa.firebaseapp.com",
    databaseURL: "https://buzzer-button-fbfaa-default-rtdb.firebaseio.com",
    projectId: "buzzer-button-fbfaa",
    storageBucket: "buzzer-button-fbfaa.appspot.com",
    messagingSenderId: "23470777183",
    appId: "1:23470777183:web:0cd3eaeb29f5096ef88cea"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
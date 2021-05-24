import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAYTnhs3vUs5Hvk4hmr7h6rhaHluDYpDkY",
    authDomain: "book-santa-f2a69.firebaseapp.com",
    projectId: "book-santa-f2a69",
    storageBucket: "book-santa-f2a69.appspot.com",
    messagingSenderId: "633723425032",
    appId: "1:633723425032:web:fd8092ce16d6f646555cbd"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();

  
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2y_d54BhrCTA33I8kufPldQVL6GA5CKc",
  authDomain: "whatsapp-2-744de.firebaseapp.com",
  projectId: "whatsapp-2-744de",
  storageBucket: "whatsapp-2-744de.appspot.com",
  messagingSenderId: "738263562422",
  appId: "1:738263562422:web:8b3850505c8d8fcf194e17",
};

!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };



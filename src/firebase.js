import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOfLiKHu4XchPfyehMqUYa-Ut5EL4S1b0",
  authDomain: "linkedin-clone-83c2c.firebaseapp.com",
  projectId: "linkedin-clone-83c2c",
  storageBucket: "linkedin-clone-83c2c.appspot.com",
  messagingSenderId: "211060811442",
  appId: "1:211060811442:web:3eb327c47bbc609c204bab",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

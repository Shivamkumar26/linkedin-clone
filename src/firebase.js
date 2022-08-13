// not working in new version
// import firebase from "firebase";

// new update
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbPYIJudyI-ZKsnE5246pQzw9XJJkewdk",
  authDomain: "devnet-825b1.firebaseapp.com",
  projectId: "devnet-825b1",
  storageBucket: "devnet-825b1.appspot.com",
  messagingSenderId: "975594926909",
  appId: "1:975594926909:web:06106cf8fcb6b641308b54",
  measurementId: "G-B47C1RYGW2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

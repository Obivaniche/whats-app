import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCfnbsjLa331cQqtOwU8aDycrsxkeWxU9M",
  authDomain: "whats-app-7288d.firebaseapp.com",
  projectId: "whats-app-7288d",
  storageBucket: "whats-app-7288d.appspot.com",
  messagingSenderId: "1018815898549",
  appId: "1:1018815898549:web:bd97115da980b7948a6ffc",
  measurementId: "G-C071T5D7SP"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

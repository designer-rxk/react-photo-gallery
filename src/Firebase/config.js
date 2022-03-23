import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT9pXlRqiZUAGwNDW1E83EQ-OgwU3fGfE",
  authDomain: "photic-33d14.firebaseapp.com",
  projectId: "photic-33d14",
  storageBucket: "photic-33d14.appspot.com",
  messagingSenderId: "10177503148",
  appId: "1:10177503148:web:3c538ab510b0dc0f46a409"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
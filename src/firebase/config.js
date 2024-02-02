// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSf1r9QuDbeckRBXWOxLMWLNNLejsZwYY",
  authDomain: "practice-c0cbe.firebaseapp.com",
  projectId: "practice-c0cbe",
  storageBucket: "practice-c0cbe.appspot.com",
  messagingSenderId: "41536692087",
  appId: "1:41536692087:web:3f02680638768da7fbcb72",
  measurementId: "G-NB6DB3K82R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db }
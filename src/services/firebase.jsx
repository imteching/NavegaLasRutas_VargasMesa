// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_vjaHMQ_0g1vhxlUYffeT8axc3eBafdY",
  authDomain: "bags4fungirls.firebaseapp.com",
  projectId: "bags4fungirls",
  storageBucket: "bags4fungirls.firebasestorage.app",
  messagingSenderId: "1042948777407",
  appId: "1:1042948777407:web:d4732cfc07e4171a1ead0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

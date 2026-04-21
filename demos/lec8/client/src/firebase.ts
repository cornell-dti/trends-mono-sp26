// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxYsSEfmopAVwAPgnjgEBzDZ0d9OBjfdk",
  authDomain: "trends-sp26-lec7-demo.firebaseapp.com",
  projectId: "trends-sp26-lec7-demo",
  storageBucket: "trends-sp26-lec7-demo.firebasestorage.app",
  messagingSenderId: "252787136161",
  appId: "1:252787136161:web:e11aff79e6a2afe18542e0",
  measurementId: "G-PPZZDWEEHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth();

export { app, db, auth };

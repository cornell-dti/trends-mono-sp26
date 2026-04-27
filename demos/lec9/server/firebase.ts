import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Our web app's Firebase configuration (example)
const firebaseConfig = {
  apiKey: "AIzaSyBTq8T-Yb-RoFMx3cPvRQ8JqT8XsYa_5RQ",
  authDomain: "trends-sp25-lec7-demo.firebaseapp.com",
  projectId: "trends-sp25-lec7-demo",
  storageBucket: "trends-sp25-lec7-demo.firebasestorage.app",
  messagingSenderId: "1054386809202",
  appId: "1:1054386809202:web:18521b9b9e1936ce6055eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

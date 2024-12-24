
// src/firebase/FirebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBJmkGfzXhzwoQGL94ZEbh2VfziOXnkIg",
  authDomain: "myfirstapp-daa2f.firebaseapp.com",
  projectId: "myfirstapp-daa2f",
  storageBucket: "myfirstapp-daa2f.firebasestorage.app",
  messagingSenderId: "440579496145",
  appId: "1:440579496145:web:f2a96e2409b7bd6eb6cdf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };

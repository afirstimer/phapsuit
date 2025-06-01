// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXywPlhggJlz4MyC0bUB3HFHJZ-BZKkyQ",
  authDomain: "phapsuit-4f3c0.firebaseapp.com",
  projectId: "phapsuit-4f3c0",
  storageBucket: "phapsuit-4f3c0.firebasestorage.app",
  messagingSenderId: "546453806696",
  appId: "1:546453806696:web:bbab8e541f3c01949825dd",
  measurementId: "G-DVGG7X9SBM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

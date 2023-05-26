// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU3pSWKgVe501rcDPsIGIy2xVg3r4GepM",
  authDomain: "tupilcha-b0d7c.firebaseapp.com",
  projectId: "tupilcha-b0d7c",
  storageBucket: "tupilcha-b0d7c.appspot.com",
  messagingSenderId: "489396954814",
  appId: "1:489396954814:web:10f60a11040733eb65a0ef",
  measurementId: "G-5EKQG5J7YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

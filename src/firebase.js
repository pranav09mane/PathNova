// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdSmGZtVlNASBnPRoHwdeqkhmdeWAI8_8",
  authDomain: "pathnova-9a865.firebaseapp.com",
  projectId: "pathnova-9a865",
  storageBucket: "pathnova-9a865.appspot.com",
  messagingSenderId: "199309939955",
  appId: "1:199309939955:web:a9874da1b4c6a14c6ed386",
  measurementId: "G-DHB7CNLRG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getAuth } from "firebase/auth"; // For Firebase Authentication
import { getAnalytics } from "firebase/analytics"; // For Firebase Analytics

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2McUdINWp6XmCnOzbmfeha2rJgQLCF4A",
  authDomain: "pathnova-b2ff0.firebaseapp.com",
  projectId: "pathnova-b2ff0",
  storageBucket: "pathnova-b2ff0.appspot.com", // <-- Corrected here
  messagingSenderId: "543229710087",
  appId: "1:543229710087:web:b9ba05913b03ad5ed4ffa2",
  measurementId: "G-G201SY65YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Firebase Authentication
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export the necessary instances
export { app, db, auth, analytics };

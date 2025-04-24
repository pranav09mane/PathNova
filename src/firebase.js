import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2McUdINWp6XmCnOzbmfeha2rJgQLCF4A",
  authDomain: "pathnova-b2ff0.firebaseapp.com",
  projectId: "pathnova-b2ff0",
  storageBucket: "pathnova-b2ff0.firebasestorage.app",
  messagingSenderId: "543229710087",
  appId: "1:543229710087:web:b9ba05913b03ad5ed4ffa2",
  measurementId: "G-G201SY65YY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;  // This exports the app as default
export { db };

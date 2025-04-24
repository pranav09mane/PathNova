// src/firebaseAuth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase';


const auth = getAuth(app);

// Create user
export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
};

// Sign in user
export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
};

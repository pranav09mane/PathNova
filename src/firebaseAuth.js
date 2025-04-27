// Import necessary functions for authentication
import { getAuth } from "firebase/auth";
import { app } from "./firebase"; // Import the initialized app from `firebase.js`

// Initialize Firebase Authentication
const auth = getAuth(app); // Use the app initialized in `firebase.js`

export { auth }; // Export `auth` for use in other files

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-57405.firebaseapp.com",
  projectId: "mern-auth-57405",
  storageBucket: "mern-auth-57405.appspot.com",
  messagingSenderId: "747712998357",
  appId: "1:747712998357:web:93bde9d124e1f9958e2b5c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVHATxo0MPUufJVpre8i-zP6tuDf-Cp28",
  authDomain: "simple-firebase2025.firebaseapp.com",
  projectId: "simple-firebase2025",
  storageBucket: "simple-firebase2025.firebasestorage.app",
  messagingSenderId: "806922339188",
  appId: "1:806922339188:web:eb173533451836af73a221"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
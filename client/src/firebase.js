// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-98bee.firebaseapp.com",
    projectId: "mern-estate-98bee",
    storageBucket: "mern-estate-98bee.appspot.com",
    messagingSenderId: "836947535215",
    appId: "1:836947535215:web:fcf8375105c9c213a1f49a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
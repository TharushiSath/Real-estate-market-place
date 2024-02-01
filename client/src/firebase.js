// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6d529.firebaseapp.com",
  projectId: "mern-estate-6d529",
  storageBucket: "mern-estate-6d529.appspot.com",
  messagingSenderId: "237947065705",
  appId: "1:237947065705:web:c62ea81a471347a81919f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
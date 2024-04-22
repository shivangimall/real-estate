// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mern-estate-9d878.firebaseapp.com",
  projectId: "mern-estate-9d878",
  storageBucket: "mern-estate-9d878.appspot.com",
  messagingSenderId: "981316973233",
  appId: "1:981316973233:web:ef16b9d46de3bc3d27a890"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
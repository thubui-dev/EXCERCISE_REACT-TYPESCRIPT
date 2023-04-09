// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx7eKjq5cWCXVXCy8yid3Iqmkv5cDyluc",
  authDomain: "react-typescript-firebas-3e18a.firebaseapp.com",
  projectId: "react-typescript-firebas-3e18a",
  storageBucket: "react-typescript-firebas-3e18a.appspot.com",
  messagingSenderId: "411256301382",
  appId: "1:411256301382:web:a5636dfea336d12f212747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
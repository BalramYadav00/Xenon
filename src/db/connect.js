// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH7Xn95SNe5KE7XJb1lmcSpgWCXtmonrc",
  authDomain: "xenon-c617b.firebaseapp.com",
  projectId: "xenon-c617b",
  storageBucket: "xenon-c617b.appspot.com",
  messagingSenderId: "465748293221",
  appId: "1:465748293221:web:c9859525afab3c35bb388c",
  measurementId: "G-F3CJR60NVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

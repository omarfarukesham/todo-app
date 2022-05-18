// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU-9kQvoQEFcY69OIajfzCis2hM7AqUvY",
  authDomain: "to-do-40e43.firebaseapp.com",
  projectId: "to-do-40e43",
  storageBucket: "to-do-40e43.appspot.com",
  messagingSenderId: "637720623084",
  appId: "1:637720623084:web:b5bb65bb772e46eaaef2c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyGQD1H6FKPCVaBwRQosCHf-RNC0D_bF0",
  authDomain: "ny-peace-of-mind.firebaseapp.com",
  databaseURL: "https://ny-peace-of-mind-default-rtdb.firebaseio.com",
  projectId: "ny-peace-of-mind",
  storageBucket: "ny-peace-of-mind.appspot.com",
  messagingSenderId: "831392043663",
  appId: "1:831392043663:web:862fe02e91b586e339d6fa",
  measurementId: "G-ZT2MHJVGYT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getDatabase();

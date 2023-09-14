// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5iOeDN0djHMYHoU5sDX3cAcpfU6LRpSU",
  authDomain: "fir-setup-e4f7e.firebaseapp.com",
  projectId: "fir-setup-e4f7e",
  storageBucket: "fir-setup-e4f7e.appspot.com",
  messagingSenderId: "873644678403",
  appId: "1:873644678403:web:5fa0852d9146af91789d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
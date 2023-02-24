// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSTCfJ9E4TdPEOR80GQKAfkTCjkZ0DC54",
  authDomain: "restaurant-by-aman.firebaseapp.com",
  databaseURL:
    "https://restaurant-by-aman-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "restaurant-by-aman",
  storageBucket: "restaurant-by-aman.appspot.com",
  messagingSenderId: "83986054927",
  appId: "1:83986054927:web:411b13ed94e7e7e54e887a",
  measurementId: "G-0VZ0XZ10QP",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const firebase__auth = getAuth(app);
const firebase__provider = new GoogleAuthProvider();

export { firestore, storage, firebase__auth, firebase__provider };

// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "restaurant-by-aman.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-0VZ0XZ10QP",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const firebase__auth = getAuth(app);
const firebase__provider = new GoogleAuthProvider();

export { firestore, storage, firebase__auth, firebase__provider };

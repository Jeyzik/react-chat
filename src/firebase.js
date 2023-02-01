import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu_mYu4EW6K-uhjM_gfD_WGZxjY8AxB9c",
  authDomain: "reactchat-aab75.firebaseapp.com",
  projectId: "reactchat-aab75",
  storageBucket: "reactchat-aab75.appspot.com",
  messagingSenderId: "1019320620356",
  appId: "1:1019320620356:web:a7129a6700b26d1b45b311",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfenFslequ0tnfmoWw61J7YWRjGPAG13Q",
  authDomain: "myfarmapp-c1cdb.firebaseapp.com",
  projectId: "myfarmapp-c1cdb",
  storageBucket: "myfarmapp-c1cdb.firebasestorage.app",
  messagingSenderId: "1036813358032",
  appId: "1:1036813358032:web:e97802c234cfc9e7a4dfd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); 
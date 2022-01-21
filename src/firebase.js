// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo0UPh_il5PP0PWiWZ6orOS2WkGSGUa6Y",
  authDomain: "kanay-store.firebaseapp.com",
  projectId: "kanay-store",
  storageBucket: "kanay-store.appspot.com",
  messagingSenderId: "213526645130",
  appId: "1:213526645130:web:1ae4b0e0f5c25dba4f6073",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8eC50B2iEjxQJBMI752W2TshypH2TrJk",
  authDomain: "competishunassignment.firebaseapp.com",
  projectId: "competishunassignment",
  storageBucket: "competishunassignment.appspot.com",
  messagingSenderId: "460128519569",
  appId: "1:460128519569:web:4a1273332706af8e658630",
  measurementId: "G-MNF5LQP8KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

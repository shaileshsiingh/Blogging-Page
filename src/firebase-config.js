import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPPac1xGgDUCBzoSJvinOsdLrgE9GcDr8",
  authDomain: "blogpost-ba304.firebaseapp.com",
  projectId: "blogpost-ba304",
  storageBucket: "blogpost-ba304.appspot.com",
  messagingSenderId: "672454844604",
  appId: "1:672454844604:web:789d2902c19fcf8db8f0b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

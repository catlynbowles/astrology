import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfCSvX-WReqEhX4Nb1sQRsddvmZua5zEI",
  authDomain: "write-the-stars.firebaseapp.com",
  projectId: "write-the-stars",
  storageBucket: "write-the-stars.appspot.com",
  messagingSenderId: "561227326093",
  appId: "1:561227326093:web:0cf01524727c70c17eb8 4",
  measurementId: "G-D2XLCYS7LZ",
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const db = getFirestore(app);
console.log(db)

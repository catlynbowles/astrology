import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import AstrologyQuery from "@/components/AstrologyQuery";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

const provider = new GoogleAuthProvider();

const inter = Inter({ subsets: ["latin"] });

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfCSvX-WReqEhX4Nb1sQRsddvmZua5zEI",
  authDomain: "write-the-stars.firebaseapp.com",
  projectId: "write-the-stars",
  storageBucket: "write-the-stars.appspot.com",
  messagingSenderId: "561227326093",
  appId: "1:561227326093:web:0cf01524727c70c17eb8c4",
  measurementId: "G-D2XLCYS7LZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Home() {
  const [user, setUser] = useState({});

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        signIn();
      }
    });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <AstrologyQuery />
      </main>
    </>
  );
}

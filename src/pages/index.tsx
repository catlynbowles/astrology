import styles from "@/styles/Home.module.css";
import AstrologyQuery from "@/components/AstrologyQuery";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, provider } from "@/firebase";

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
      user ? setUser(user) : signIn()
    });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <AstrologyQuery user={user}/>
      </main>
    </>
  );
}

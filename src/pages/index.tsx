import styles from "@/styles/Home.module.css";
import Homepage from "@/components/Homepage";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, provider } from "@/firebase";

export default function LandingPage() {
  const [user, setUser] = useState({});

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : signIn();
    });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Homepage user={user} />
      </main>
    </>
  );
}

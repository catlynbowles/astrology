import { useEffect, useState } from "react";
import Link from "next/link";
import Form from "./Form";
import { db } from "@/firebase";
import {
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import Loading from "./Loading";

export default function HomePage({ user }: any) {
  const [sign, setSign] = useState("");
  const [loading, setLoading] = useState(true)

  const getUserData = async () => {
    // const docRef = doc(db, "sign", sign);
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    const q = query(collection(db, `sign`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data()["user"] === user.uid) {
        setSign(doc.data().sign);
        setLoading(false)
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, [user, sign]);

  return (
    <div>
      {loading ? <Loading /> : sign ? (
        <div>
          <h1>Hello, {user.displayName.split(" ")[0]}!</h1>
          <Link href={`/horoscope/${sign}/today`}>
            Find your <em>real</em> {sign} horoscope!
          </Link>
        </div>
      ) : (
        <Form user={user} setSign={setSign} />
      )}
    </div>
  );
}

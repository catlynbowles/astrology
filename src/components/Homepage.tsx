import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";
import Form from "./Form";

export default function HomePage({ user }: any) {
  const [sign, setSign] = useState("");
  // const [day, setDay] = useState("");

  const getThings = async () => {
    const q = query(collection(db, "sign"), where("sign", "==", "libra"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(user.uid, "usr");
      if (doc.data().user === user.uid) {
        setSign(doc.data().sign);
        console.log("heyyp");
      }
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  useEffect(() => {
    getThings();
  }, [user, sign]);

  return (
    <div>
      {sign ? (
        <div>
          <h1>Hello, {user.displayName.split(" ")[0]}!</h1>
          <Link href={`/horoscope/${sign}/today`}>
            Find your <em>real</em> {sign} horoscope!
          </Link>
        </div>
      ) : (
        <Form user={user} setSign={setSign}/>
      )}
    </div>
  );
}

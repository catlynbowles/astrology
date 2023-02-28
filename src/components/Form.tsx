import { signs } from "@/pages/api/data";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

export default function Form({ user }: any) {
  const [sign, setSign] = useState("");
  // const [day, setDay] = useState("");

  const addUserSign = async (e: any) => {
    e.preventDefault();
    console.log("user", user);
    if (user) {
      const docRef = await addDoc(collection(db, "sign"), {
        user: user.uid,
        sign: sign,
      });
      console.log("Document written with ID: ", docRef.id);
    } else {
      console.error("Error adding document: ", e);
    }
  };

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
        <form
          onSubmit={(e) => addUserSign(e)}
          // action={`/horoscope/${sign}`}
          className="flex flex-col items-center"
        >
          {sign && <div>hi</div>}
          <label className="text-3xl">Which stars will you align today?</label>
          <br />
          <Dropdown
            items={signs}
            setChange={setSign}
            placeholder="what's your sign?"
          />
          <br />
          {/* <Dropdown items={days} setChange={setDay} placeholder="select a day" /> */}
          <button
            onChange={(event) =>
              setSign((event.target as HTMLTextAreaElement).value)
            }
            type="submit"
            className="bg-black text-white m-5 p-1 hover:bg-white hover:text-black"
          >
            *star search*
          </button>
        </form>
      )}
    </div>
  );
}

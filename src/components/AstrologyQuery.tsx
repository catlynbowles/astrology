import { useState } from "react";
import { signs, days } from "@/pages/api/data";
import Dropdown from "./Dropdown";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { userAgent } from "next/server";

export default function AstrologyQuery({ user }: any) {
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");
  console.log(user)

  const addUserSign = async (e: any) => {
    e.preventDefault();
    console.log(user);
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

  return (
    <form
      // action={`/horoscope/${sign}/${day}`}
      className="flex flex-col items-center"
    >
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
        onClick={(e) => addUserSign(e)}
        type="submit"
        className="bg-black text-white m-5 p-1 hover:bg-white hover:text-black"
      >
        *star search*
      </button>
    </form>
  );
}

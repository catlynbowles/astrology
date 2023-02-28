import { db } from "@/firebase";
import { signs } from "@/pages/api/data";
import { sign } from "crypto";
import { addDoc, collection } from "firebase/firestore";
import Dropdown from "./Dropdown";

export default function Form({ user, setSign }: any) {
  const addUserSign = async (e: any) => {
    e.preventDefault();
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
      onSubmit={(e) => addUserSign(e)}
      className="flex flex-col items-center"
    >
      <label className="text-3xl">Which stars will you align today?</label>
      <br />
      <Dropdown
        items={signs}
        setSign={setSign}
        placeholder="what's your sign?"
      />
      <br />
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
  );
}

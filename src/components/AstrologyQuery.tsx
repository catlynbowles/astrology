import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import Form from "./Form";

export default function AstrologyQuery({ user }: any) {
  const [signs, setSigns] = useState([]);

  const getSigns = async () => {
    const querySnapshot = await getDocs(collection(db, "sign"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data().user);
      console.log(user.uid);
      if (doc.data().user === user.uid) {
        
        console.log("hey");
      }
      // if (doc.)
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  useEffect(() => {
    getSigns();
  }, []);

  return <Form user={user} />;
}
function setDoc(arg0: any, data: any) {
  throw new Error("Function not implemented.");
}

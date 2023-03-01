import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";

export const getZodiacs = async () => {
  let zodiacs = [];
  const querySnapshot = await getDocs(collection(db, "horoscopes"));
  querySnapshot.forEach((doc) => {
    zodiacs = doc.data().zodiacs;
  });
  return zodiacs
};

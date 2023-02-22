import { useState } from "react";
import { signs, days } from "@/pages/api/data";
import Dropdown from "./Dropdown";

export default function AstrologyQuery() {
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");

  return (
    <form
      action={`/horoscope/${sign}/${day}`}
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
      <Dropdown items={days} setChange={setDay} placeholder="select a day" />
      <button
        type="submit"
        className="bg-black text-white m-5 p-1 hover:bg-white hover:text-black"
      >
        *star search*
      </button>
    </form>
  );
}

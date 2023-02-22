import Link from "next/link";
import { useAuth } from "../context/AppContext";
import Dropdown from "./Dropdown";

export default function AstrologyQuery() {
  const { sign, day, setSign, setDay } = useAuth();
  const days = ["yesterday", "today", "tomorrow"];
  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
  ];

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

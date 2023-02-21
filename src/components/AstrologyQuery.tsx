import Link from "next/link";
import { useAuth } from "../context/AppContext";


export default function AstrologyQuery() {
  const { sign, day, setSign, setDay } = useAuth()
  
  return (
    <form className="flex flex-col items-center">
      <label className="text-3xl">Which stars will you align today?</label>
      <br />
      <input
        className="text-center"
        type="text"
        placeholder="What's your sign?"
        required
        onChange={(e) => setSign(e.target.value)}
      />
      <br />
      <select name="When ?" required className="h-5" onChange={(e) => setDay(e.target.value)}>
        <option>Select a day</option>
        <option value="today">today</option>
        <option value="yesterday">yesterday</option>
        <option value="tomorrow">tomorrow</option>
      </select>
      <Link href={`/horoscope/${sign}/${day}`}>
        <button className="bg-black text-white m-5 p-1 hover:bg-white hover:text-black">
          *star search*
        </button>
      </Link>
    </form>
  );
}

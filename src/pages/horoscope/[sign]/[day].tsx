import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { fetchHoroscopeData } from "../../api/fetch";
import { signs } from "@/pages/api/data";
import Loading from "@/components/Loading";

const HoroscopeDefaultValues = {
  current_date: "",
  description: "",
  compatibility: "",
  lucky_number: "",
  mood: "",
  lucky_time: "",
  color: "",
};

export default function Results() {
  const randomSign = useRef("");
  const [loading, setLoading] = useState(true);
  const [results, setHoroscopeResults] = useState(HoroscopeDefaultValues);
  const [decoyResults, setDecoyResults] = useState(HoroscopeDefaultValues);

  const router = useRouter();
  const { sign, day } = router.query;

  useEffect(() => {
    if (sign && day) {
      let arr = signs.filter((symbol) => symbol !== sign);
      randomSign.current = arr[Math.floor(Math.random() * arr.length)];

      Promise.all([
        fetchHoroscopeData(sign, day),
        fetchHoroscopeData(randomSign.current, day),
      ]).then((data) => {
        setHoroscopeResults(data[0]);
        setDecoyResults(data[1]);
        setLoading(false);
      });
    }
  }, [sign, day]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {sign} horoscope for {results.current_date}
          <p>{results.description}</p>
          <p>The Mood: {results.mood}</p>
          <p>Favorite Color: {results.color}</p>
          <p>Lucky Number: {results.lucky_number}</p>
          <p>Best Friend Today: {results.compatibility}</p>
          <p>Lucky Time: {results.lucky_time}</p>
        </div>
      )}
    </div>
  );
}

// an app that says identify if it's yours or someone else's !

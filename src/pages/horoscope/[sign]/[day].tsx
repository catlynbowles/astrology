import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { fetchHoroscopeData } from "../../api/fetch";
import { signs } from "@/pages/api/data";
import Loading from "@/components/Loading";
import Prompt from "@/components/Prompt";
import { HoroscopeType, HoroscopeDefaultValues } from "../../../types/types";

type Sign = {
  sign: string;
};

export default function Results() {
  const randomSign = useRef("");
  const [loading, setLoading] = useState(true);
  const [horoscope, setHoroscope] = useState<HoroscopeType>(
    HoroscopeDefaultValues
  );
  const [decoyHoroscope, setDecoyHoroscope] = useState<HoroscopeType>(
    HoroscopeDefaultValues
  );

  const router = useRouter();
  const { sign, day } = router.query;

  useEffect(() => {
    if (sign && day) {
      let filteredHoroscopes = signs.filter((symbol) => symbol !== sign);
      randomSign.current =
        filteredHoroscopes[
          Math.floor(Math.random() * filteredHoroscopes.length)
        ];

      Promise.all([
        fetchHoroscopeData(sign, day),
        fetchHoroscopeData(randomSign.current, day),
      ]).then((data) => {
        data[0].name = sign;
        setHoroscope(data[0]);
        data[1].name = randomSign.current;
        setDecoyHoroscope(data[1]);
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
          {sign} horoscope for {horoscope.current_date}
          <Prompt
            title="How do you feel?"
            description={horoscope.description}
          />
          <Prompt title="What's the mood?" description={horoscope.mood} />
          <Prompt title="What's the color?" description={horoscope.color} />
          <Prompt title="Lucky number?" description={horoscope.lucky_number} />
          <Prompt
            title="Who was your bestie?"
            description={horoscope.compatibility}
          />
          <Prompt
            title="What was the best time of day?"
            description={horoscope.lucky_time}
          />
        </div>
      )}
    </div>
  );
}

// an app that says identify if it's yours or someone else's !

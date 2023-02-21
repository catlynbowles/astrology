import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {fetchHoroscopeData} from '../../api/fetch'
import Loading from "@/components/Loading";

export default function Results() {
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState({
    current_date: '', 
    description: '',
    compatibility: '',
    lucky_number: '',
    mood: '',
    lucky_time: ''
  })

  

  const router = useRouter();
  const {sign, day} = router.query
  console.log(sign, day)

  useEffect(() => {
    fetchHoroscopeData(sign, day)
      .then(data => {
        setResults(data)
        setLoading(false)
      })
      .then(it => console.log(it))
  }, [sign])

  return (
    <div>
      {loading ? <Loading /> :
      <div>
        {sign} horoscope for {results.current_date}
        <p>{results.description}</p>
        <p>The Mood: {results.mood}</p>
        <p>Lucky Number: {results.lucky_number}</p>
        <p>Best Friend Today: {results.compatibility}</p>
        <p>Lucky Time: {results.lucky_time}</p>
      </div>
}
    </div>
  );
}

// an app that says identify if it's yours or someone else's ! 
export function fetchHoroscopeData(sign?: string | string[], day?: string | string[]) {
  const options = {
    method: "POST",
    headers: {
      "X-RapidAPI-Key": "3bea32400cmsh3e321627a520f18p12bc62jsn79614440dfdd",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    },
  };

  return fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${day}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
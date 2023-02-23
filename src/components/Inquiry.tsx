import Prompt from "./Prompt";
import { HoroscopeType, HoroscopeDefaultValues } from "../types/types";

type InquiryProps = {
  decoyHoroscope: HoroscopeType;
  horoscope: HoroscopeType;
};

export default function Inquiry({ decoyHoroscope, horoscope }: InquiryProps) {
  let properties = Object.keys(decoyHoroscope);

  return (
    <div>
      {properties.map((prop) => {
        console.log(prop)
        return (
          <div>
            <h3>{prop}</h3>
          </div>
        );
      })}
    </div>
  );
}

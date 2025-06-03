import { useState } from "react";
import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 27.68,
    humidity: 60,
    temp: 30.5,
    tempMax: 32.0,
    tempMin: 28.0,
    weather: "clear sky",
  });

  let updateWeatherInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
  return (
    <div className="WeatherApp" style={{ textAlign: "center" }}>
      
      <SearchBox updateInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

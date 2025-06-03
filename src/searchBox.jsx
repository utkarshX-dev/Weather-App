import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const getWeatherInfo = async (city) => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city.charAt(0).toUpperCase() + city.slice(1).toLowerCase(),
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSumbit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <h1>Weather App</h1>
      <form>
        <TextField
          onChange={handleChange}
          label="Enter City "
          variant="outlined"
          required
          value={city}
        />
        <br /> <br />
        <Button onClick={handleSumbit} variant="contained" type="sumbit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>
            City not found. Please enter a valid city name.
          </p>
        )}
      </form>
    </div>
  );
}

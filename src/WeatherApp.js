import React, { useState } from "react";
import { getWeatherData } from "./Api";

const WeatherApp = () => {
  const [zipCode, setZipCode] = useState("");
  const [dataType, setDataType] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // handle submission of zipcode, forecast and data request to weather API

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };
  const handleDataTypeChange = (event) => {
    setDataType(event.target.value);
  };

  const handleGetWeatherData = async () => {
    const data = await getWeatherData(zipCode, dataType);
    setWeatherData(data);
  };

  //render page once zipcode and forecast selected
  //TODO: conditional formatting to display button  OR handle on submit of enter, create for forcast of 10 day

  return (
    <div>
      <a href="/sign-in">Return to Login</a>
      <br />
      <input
        type="text"
        value={zipCode}
        placeholder="zipcode"
        onChange={handleZipCodeChange}
      />
      <br />
      <select onChange={handleDataTypeChange}>
        <option value="null">Select Forecast</option>
        <option value="current">Current Weather</option>
        <option value="forecast">Forecast</option>
      </select>
      <br />
      <button onClick={handleGetWeatherData}>Get Weather</button>
      {weatherData && (
        <div>
          <h1 id="location">
            {weatherData.location.name}, {weatherData.location.region}
          </h1>

          <h2>
            {weatherData.current.temp_f}° F / {weatherData.current.temp_c}° C
          </h2>
          <img src={weatherData.current.condition.icon}></img>
          <p>{weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

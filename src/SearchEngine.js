import React, { useState } from "react";
import axios from "axios"; 
import CurrentWeather from "./CurrentWeather";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ load: false });

function displayWeather(response) {
  setWeather({
    load: true,
    city: response.data.city,
    country: response.data.country,
    time: new Date (response.data.time * 1000),
    icon: response.data.condition.icon_url,
    temperature: Math.round(response.data.temperature.current),
    description: response.data.condition.description,
    feel: Math.round(response.data.temperature.feels_like),
    humidity: response.data.temperature.humidity,
    wind: Math.round(response.data.wind.speed)
  })
}

  function handleSubmit(event) {
    event.preventDefault();
  }

function updateCity(event) {
  search();
setCity(event.target.value);
}

function search() {
  let units = "metric";
  let apiKey = "1b407ta2c3149f9aa0c3o9b4d44f9eed";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayWeather);
}

if (weather.load) {
return (
  <div className="SearchEngine">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-10">
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus={true}
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-success" />
        </div>
      </div>
    </form>
    <CurrentWeather data={weather} />
  </div>
);
} else {
  search();
  return "Loading..."
}

   


}
 

import React from "react";

export default function ForecastWeather(props) {

function maxTemperature() {
 let temperature = Math.round(props.data.temperature.maximum);
 return `${temperature}`;
}

function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
}

function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
}

    return (
      <div className="ForecastWeather">
          <ul>
              
        <li>{day()}</li>
        <li><img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          size={30}
        /></li>
        <li>{props.data.condition.description}</li>
        <span>{maxTemperature()}°C</span> {" "}
        <span className="min">{minTemperature()}°C</span>
        </ul>
      </div>
    );
}
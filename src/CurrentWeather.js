import React from "react";
import FormatDate from "./FormatDate";
import TemperatureConversion from "./TemperatureConversion";

export default function CurrentWeather(props) {
return (
  <div className="CurrentWeather">
    <div className="row">
      <div className="col-sm-6">
        <h1>
          {props.data.city}, {props.data.country}
        </h1>
      </div>
      <div className="col-sm-6">
        <FormatDate date={props.data.time} />
      </div>
    </div>
    <div className="d-flex flex-row justify-content-center">
      <img src={props.data.icon} alt={props.data.description} />

      <TemperatureConversion celsius={props.data.temperature} />
    </div>
    <h4>{props.data.description}</h4>

    <div className="row weather-condition">
      <div className="col-6">💧Humidity - {props.data.humidity} %</div>
      <div className="col-6">💨Wind - {props.data.wind} km/h</div>
    </div>
  </div>
);
}
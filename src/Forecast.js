import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastWeather from "./ForecastWeather";

export default function Forecast(props) {
    const [ready, setReady] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setReady(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setReady(true);
setForecast(response.data.daily);
    }

    function run() {
let units = "metric";
let lat = props.coordinates.latitude;
let lon = props.coordinates.longitude;
let apiKey = "1b407ta2c3149f9aa0c3o9b4d44f9eed";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
axios.get(apiUrl).then(handleResponse);
    }

if (ready) {
 return (
   <div className="Forecast">
     <div className="row">
         {forecast.map(function (dailyForecast, index) {
             if (index < 6 && index !== 0) {
                 return (
                     <div className="col" key={index}>
                         <ForecastWeather data={dailyForecast} />
                     </div>
                 );
             } else {
                 return null;
             }
         })}
     </div>
   </div>
 );
} else {
    run();
    return null;
}


   
}
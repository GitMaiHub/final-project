import React from "react";
import FormatDate from "./FormatDate";
import TemperatureConversion from "./TemperatureConversion";

export default function CurrentWeather(props) {
return (
    <div className="CurrentWeather">
        <div className="row">
            <div className="col-sm-6">
                <h1>{props.data.city}, {props.data.country}</h1>
            </div>
            <div className="col-sm-6">
                <FormatDate date={props.data.time} />
            </div>
        </div>
        <div className="temperature-box">
          <div><img src={props.data.icon} alt={props.data.description} /></div>
           <TemperatureConversion celsius={props.data.temperature} />
        </div>
        <div className="row">
            <div className="col-6">
                {props.data.description}
            </div>
            <div className="col-6">
                {props.data.feel}
            </div>
         <div className="row">
             <div className="col-6">
                 💧Humidity - {props.data.humidity} %
             </div>
             <div className="col-6">
                 💨Wind - {props.data.wind} km/h
             </div>
             </div>   
        </div>
    </div>
)
}
import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
            <li>Pres: <strong>{props.data.pressure}km/h</strong></li>
            <li>Feels like: <strong>{Math.round(props.data.feelsLike)}°</strong></li>
            <li>H: <strong>{Math.round(props.data.setHighTemp)}°</strong>  L: <strong>{Math.round(props.data.setLowTemp)}°</strong></li>             
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={53} />
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
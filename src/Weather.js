import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
      setHighTemp:response.data.main.temp_max,
      setLowTemp:response.data.main.temp_min,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
          <h2 className="title">Weather App 🌤</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 ">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/marcelaclos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mars Clos
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/marcelaclos/project-weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://condescending-noether-247300.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>   
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
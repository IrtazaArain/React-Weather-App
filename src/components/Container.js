import React, { useState } from "react";
import axios from "axios";
import styles from "../App.module.css";
import SideCard from "./Sidecard";
import Incontainer from "./Incontainer";

const Container = () => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = (city) => {
    if (!city) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      });
  };

  return (
    <div className={styles.container}>
      <SideCard weatherData={weatherData} />
      <Incontainer
        apiKey={apiKey}
        fetchWeatherData={fetchWeatherData}
        weatherData={weatherData}
      />
    </div>
  );
};

export default Container;

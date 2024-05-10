import React from "react";
import styles from "../App.module.css";
import Cards from "./Cards";
import FeelsLikeIcon from "../assets/FeelsLikeIcon.svg";
import HumidityIcon from "../assets/HumidityIcon.svg";
import SunriseIcon from "../assets/SunriseIcon.svg";
import SunsetIcon from "../assets/SunsetIcon.svg";
import WindIcon from "../assets/WindIcon.svg";
import RainIcon from "../assets/RainIcon.svg";

const Itemcontainer = ({ weatherData }) => {
  const getWeatherDataText = (key) => {
    if (!weatherData || !weatherData.main === undefined) {
      return "N/A";
    }
    switch (key) {
      case "feels_like":
        return `${weatherData.main.feels_like}°C`;
      case "wind_speed":
        return `${weatherData.wind.speed} m/s`;
      case "humidity":
        return `${weatherData.main.humidity}%`;
      case "rain":
        return weatherData.rain ? `${weatherData.rain["1h"]} mm` : "N/A";
      case "sunrise":
        const sunrise = new Date(weatherData.sys.sunrise * 1000);
        return sunrise.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
      case "sunset":
        const sunset = new Date(weatherData.sys.sunset * 1000);
        return sunset.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
      default:
        return "N/A";
    }
  };

  const weatherProperties = [
    {
      title: "Feels Like",
      Icon: FeelsLikeIcon,
      text: getWeatherDataText("feels_like"),
    },
    { title: "Wind", Icon: WindIcon, text: getWeatherDataText("wind_speed") },
    {
      title: "Humidity",
      Icon: HumidityIcon,
      text: getWeatherDataText("humidity"),
    },
    { title: "Rain", Icon: RainIcon, text: getWeatherDataText("rain") },
    {
      title: "Sunrise",
      Icon: SunriseIcon,
      text: getWeatherDataText("sunrise"),
    },
    { title: "Sunset", Icon: SunsetIcon, text: getWeatherDataText("sunset") },
  ];

  return (
    <div className={styles.gridcontainer}>
      {weatherProperties.map((property, index) => (
        <Cards
          title={property.title}
          Icon={property.Icon}
          text={property.text}
          key={index}
        ></Cards>
      ))}
    </div>
  );
};

export default Itemcontainer;

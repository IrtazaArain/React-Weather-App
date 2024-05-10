import React, { useState } from "react";
import { format } from "date-fns";
import styles from "../App.module.css";
import Itemcontainer from "./Itemcontainer";

const Incontainer = ({ fetchWeatherData, weatherData }) => {
  const date = new Date();
  const formattedDate = format(date, "EEEE, d MMMM yyyy");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);
  };

  return (
    <div className={styles.incontainer}>
      <div className={styles.date}>{formattedDate}</div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputfield}
          type="text"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
      </form>
      <Itemcontainer weatherData={weatherData} />
    </div>
  );
};

export default Incontainer;

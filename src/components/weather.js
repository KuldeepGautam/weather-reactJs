import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=matric";
  const apiKey = "127185325ff40a51c11478288acf6895";
  const [weathers, setWeathers] = useState({});
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count")) || 0
  );

  const fetchWeathers = () => {
    axios.get(apiUrl + `&appid=${apiKey}`).then((response) => {
      setWeathers(response.data);
      console.log("response.data", response.data);
    });
  };

  useEffect(() => {
    fetchWeathers();
    const storedData = localStorage.setItem("count", count);
    if (storedData) {
      setCount(storedData);
    }
    // localStorage.setItem("counter", counter.toString());
  }, [count]);

  return (
    <div>
      <h2>Weather</h2>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        type="button"
      >
        +
      </button>
      <div>
        <p>{weathers.name}</p>
        <p>
          Wind: Direction - {weathers.wind?.deg}, Speed - {weathers.wind?.speed}
          km/h
        </p>
      </div>
    </div>
  );
};

export default Weather;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=matric";
  const apiKey = "127185325ff40a51c11478288acf6895";
  const [weathers, setWeathers] = useState({});

  const fetchWeathers = () => {
    axios.get(apiUrl + `&appid=${apiKey}`).then((response) => {
      setWeathers(response.data);
      console.log("response.data", response.data);
    });
  };

  useEffect(() => {
    fetchWeathers();
  }, []);

  return (
    <div>
      <h2>Weather</h2>
      <div>
        {/* <ul>
          {weathers.map((web) => (
            <li key={web}>{web.name}</li>
          ))}
        </ul> */}
        <p>{weathers.name}</p>
        <p>
          Wind: Direction - {weathers.wind?.deg}, Speed - {weathers.wind?.speed}{" "}
          km/h
        </p>
      </div>
    </div>
  );
};

export default Weather;

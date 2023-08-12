"use strict";
const API_KEY = "1d7ed538539a20555350a2d195db97ba";
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Error fetching data:", error));
};
export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};

import React, { useState, useEffect } from 'react';

const WeatherDataFetch = () => {
  const APIkey = "85536f555b0391991722c10d44e5c55d";
  const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [data, setData] = useState(null);
  const defaultCity = 'Narasaraopet';
  const [city, setCity] = useState(defaultCity);


  const fetchData = async () => {
    try {
      const response = await fetch(APIUrl + city + `&appid=${APIkey}`);
      const weatherData = await response.json();
      console.log(weatherData);
      setData(weatherData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);


  const submitCity = () => {
    // You can perform additional actions here when the button is clicked
    // For example, you might want to update the city based on user input
    // and trigger a new API call.
    fetchData();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Want to know weather..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={submitCity}>Find</button>
      </div>
    </div>
  );
};

export default WeatherDataFetch;

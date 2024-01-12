import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const WeatherDataFetch = () => {

    const APIkey = "85536f555b0391991722c10d44e5c55d";
    const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const [data, setData] = useState(null);
    const city = 'Narasaraopet';

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(APIUrl + city + `&appid=${APIkey}`);
                const resonse = await response.json();
                console.log(resonse);
                setData(resonse);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    },[]);


    return (
        <div>Weather App </div>
    )
}

export default WeatherDataFetch
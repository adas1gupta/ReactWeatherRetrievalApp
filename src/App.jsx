import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";

function App () {
    const [loading, setLoading] = useState(true)
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)
    const [submit, setSubmit] = useState(false)

    const API_KEY = import.meta.env.VITE_API_KEY;

    async function fetchWeather(city) {
        try {
            setLoading(true);
            const cityAPI = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
            const cityJson = await cityAPI.json();
            setLoading(false);
            if (cityJson.length > 0 && cityJson[0].lat && cityJson[0].lon) {
                setLoading(true);
                const { lat, lon } = cityJson[0];
                const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
                const weatherJson = await weatherAPI.json();
                setWeather(weatherJson);
            }
        } catch (error) {
            console.error("Error fetching weather:", error);
            alert("Failed to fetch weather data. Please try again later.");
        }
        setLoading(false)
        setSubmit(false)
    }

    useEffect(() => {
        if (city) {
            fetchWeather(city.trim())
        }

    },[submit])

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSubmit(true)
                {loading && <p>Loading...</p>}
            }}>
                <input
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>
            {weather ? (
                <div>
                    <p>City: {weather.name}</p>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            ) : (<></>)}
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
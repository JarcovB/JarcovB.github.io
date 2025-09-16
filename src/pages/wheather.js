import React, { useEffect, useState } from "react";

const API_KEY = "gbdnhxfdnfgtdnzfgngtnmz"; // Voeg hier je API key toe

function WeatherPage() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState("Amsterdam");
    const [inputValue, setInputValue] = useState("Amsterdam");

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                location
            )}&units=metric&appid=${API_KEY}&lang=nl`
        )
            .then((res) => {
                if (!res.ok) throw new Error("Fout bij ophalen weergegevens");
                return res.json();
            })
            .then((data) => {
                setWeather(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(inputValue);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ marginBottom: "1em" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Voer locatie in"
                />
                <button type="submit">Zoek</button>
            </form>
            {loading && <div>Weer aan het laden...</div>}
            {error && <div>Fout: {error}</div>}
            {!loading && !error && weather && (
                <div>
                    <h1>Weer in {weather.name}</h1>
                    <p>
                        {weather.weather[0].description}, {weather.main.temp}°C
                    </p>
                    <p>Vochtigheid: {weather.main.humidity}%</p>
                    <p>Wind: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
}

export default WeatherPage;
import { useEffect, useState } from "react";
import { useLoading } from "../components/LoadingContext";

const API_KEY = "f87c71a9f2f4ff3a1913ca85ae54f2f7";
const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather`;

const useWeatherData = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const { setLoading } = useLoading();
  // const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchWeatherData = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `${API_ENDPOINT}?q=${city}&units=metric&appid=${API_KEY}`
          );

          if (!response.ok) throw new Error("Response was not ok.");

          const data = await response.json();

          setWeatherData(data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };

      fetchWeatherData();
    }
  }, [city, setLoading]);

  const formatedData = {
    temperature: weatherData?.main?.temp,
    humidity: weatherData?.main?.humidity,
    feelsLike: weatherData?.main?.feels_like,
    weatherMain: weatherData?.weather[0]?.main,
    WeatherDescription: weatherData?.weather[0].description,
    city: weatherData?.name,
    country: weatherData?.sys?.country,
    windSpeed: weatherData?.wind?.speed,
    lon: weatherData?.coord?.lon,
    lat: weatherData?.coord?.lat,
    icon: weatherData?.weather[0]?.icon,
  };

  return { formatedData, weatherData, error };
};

export default useWeatherData;

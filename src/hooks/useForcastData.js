import { useEffect, useState } from "react";
import useWeatherData from "./useWeatherData";
import { useLoading } from "../components/LoadingContext";

const API_KEY = "f87c71a9f2f4ff3a1913ca85ae54f2f7";
const API_ENDPOINT = `https://api.openweathermap.org/data/3.0/onecall`;
const part = `minutely,alerts`;
const units = "metric";

const useForcastData = (city) => {
  const [forcastData, setForcastData] = useState(null);
  // const [isLoadingg, setIsLoading] = useState(false);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  const { formatedData } = useWeatherData(city);
  let lat = formatedData?.lat;
  let lon = formatedData?.lon;

  useEffect(() => {
    if (city && lat && lon) {
      const fetchForcastData = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `${API_ENDPOINT}?lat=${lat}&lon=${lon}&exclude=${part}&units=${units}&appid=${API_KEY}`
          );

          if (!response.ok) throw new Error("Response was not ok.");
          const data = await response.json();
          setForcastData(data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
      fetchForcastData();
    }
  }, [city, lat, lon, setLoading]);

  const hourlyData = forcastData?.hourly?.slice(1, 5);

  const formatedForcastData = {
    hourlyData: hourlyData,
    currentTemp: forcastData?.current?.temp,
    currentMain: forcastData?.current?.weather?.[0]?.main,
    icon: hourlyData?.map((item) => item?.weather?.[0]?.icon) || [],
    description: hourlyData?.map((item) => item?.weather?.[0]?.main) || [],
    timezone: forcastData?.timezone,
  };

  return { forcastData, formatedForcastData, error };
};

export default useForcastData;

import { useEffect, useState } from "react";

let API_ENDPOINT = `https://api.bigdatacloud.net/data/reverse-geocode-client`;
let _lat = null;
let _lon = null;
const useCurrenLocation = () => {
  const [city, setCity] = useState("");

  navigator.geolocation.getCurrentPosition((position) => {
    const { lat, lon } = position.coords;
    _lat = lat;
    _lon = lon;
  });
  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const response = await fetch(
          `${API_ENDPOINT}?latitude=${_lat}&longitude=${_lon}&localityLanguage=en`
        );
        const data = await response.json();
        setCity(data.city);
      } catch (error) {
        if (error) {
          throw new Error("response was not ok");
        }
      }
    };

    getCurrentLocation();
  }, [city, _lat, _lon]);
  return { city };
};

export default useCurrenLocation;

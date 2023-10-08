import { useState } from "react";
import "./App.css";
import HourlyForcast from "./components/HourlyForcast";
import SearchInput from "./components/SearchInput";
import TemperatureInfo from "./components/TemperatureInfo";
import TimeAndLocation from "./components/TimeAndLocation";
import useCurrenLocation from "./hooks/useCurrenLocation";
import { LoadingProvider } from "./components/LoadingContext";
import Loading from "./components/Loading";

function App() {
  const [city, setCity] = useState("");
  const { city: currentLocation } = useCurrenLocation();
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const handleLocation = (location) => {
    setCity(location);
  };
  setTimeout(() => {
    setIsLoading(false);
  }, 7000);
  return (
    <LoadingProvider>
      <Loading />
      <div
        className="
        mx-auto
        max-w-screen-md
        mt-4
        py-5
        px-32
        h-fit
  "
      >
        <SearchInput onSearch={handleSearch} />
        <TimeAndLocation
          onCurrentLocation={handleLocation}
          city={city || currentLocation}
        />
        <TemperatureInfo city={city || currentLocation} />
        <HourlyForcast city={city || currentLocation} />
      </div>
    </LoadingProvider>
  );
}

export default App;

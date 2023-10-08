import { Text } from "@chakra-ui/react";
import * as ReactUnicons from "@iconscout/react-unicons";

import useWeatherData from "../hooks/useWeatherData";
import Icon from "./Icon";

const TemperatureInfo = ({ city }) => {
  const { formatedData } = useWeatherData(city);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center my-4  mx-3 px-3">
          <Icon city={city} />
          <Text fontSize="md" className="font-light opacity-60">
            {formatedData.weatherMain}
          </Text>
        </div>
        <div className="flex flex-col justify-center items-center mx-3 px-3">
          <Text className="font-bold " fontSize="6xl">
            {Math.round(formatedData.temperature)}&deg;
          </Text>
          <div className="flex flex-row justify-center items-center "></div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center my-5 ">
        <div className="flex flex-col items-center justify-center  mx-4 ">
          <ReactUnicons.UilWind size={18} className="mr-1" />
          <Text>Wind</Text>
          <Text className="opacity-60">{formatedData.windSpeed} mph</Text>
        </div>

        <div className="flex flex-col items-center justify-center mx-4">
          <ReactUnicons.UilTear size={18} className="mr-1" />
          <Text>Humidity</Text>
          <Text className="opacity-60">{formatedData.humidity}%</Text>
        </div>

        <div className="flex flex-col items-center justify-center mx-4">
          <ReactUnicons.UilTemperature size={18} className="mr-1" />
          <Text>Feeling</Text>
          <Text className="opacity-60">
            {Math.round(formatedData.feelsLike)}&deg;
          </Text>
        </div>
      </div>
    </>
  );
};

export default TemperatureInfo;

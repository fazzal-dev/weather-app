import { Text } from "@chakra-ui/react";
import { UilLocationPoint } from "@iconscout/react-unicons";

import DateAndTime from "./DateTime";
import useWeatherData from "../hooks/useWeatherData";
import useCurrenLocation from "../hooks/useCurrenLocation";

const TimeAndLocation = ({ city, onCurrentLocation }) => {
  const { formatedData } = useWeatherData(city);
  const { city: _city } = useCurrenLocation();

  const handleClick = () => {
    onCurrentLocation(_city);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center my-6">
        <div className="flex flex-rows">
          <Text fontSize="2xl">{formatedData.city},</Text>
          <Text fontSize="2xl" className="font-medium">
            {formatedData.country}
          </Text>
          <div className="flex justify-center items-center ml-2">
            <UilLocationPoint
              size={20}
              className=" cursor-pointer hover:opacity-50 transition  hover:scale-125"
              onClick={handleClick}
            />
          </div>
        </div>
        <Text fontSize="lg" className="opacity-40">
          <DateAndTime city={city} />
        </Text>
      </div>
    </>
  );
};

export default TimeAndLocation;

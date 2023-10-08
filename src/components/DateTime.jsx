import useWeatherData from "../hooks/useWeatherData";

import { DateTime } from "luxon";

const DateAndTime = ({ city }) => {
  const { weatherData } = useWeatherData(city);

  const dtAsNumber = Number(weatherData?.dt);

  const dateTime = DateTime.fromSeconds(dtAsNumber);
  const localDateTime = dateTime.toFormat("ccc, dd LLLL yyyy");

  return <div>{localDateTime}</div>;
};

export default DateAndTime;

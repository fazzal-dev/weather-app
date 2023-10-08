import { Image, Text } from "@chakra-ui/react";
import useForcastData from "../hooks/useForcastData";
import useIcons from "../hooks/useIcons";

import { DateTime } from "luxon";

const HourlyForcast = ({ city }) => {
  const { formatedForcastData } = useForcastData(city);
  const { iconSrcs } = useIcons(city);

  const getTime = (index) => {
    const currentTime = DateTime.now().setZone(formatedForcastData.timezone);
    const nextHourTime = currentTime.plus({ hours: index + 1 });
    const formattedNextHourTime = nextHourTime
      .toLocaleString({
        hour: "2-digit",
        hour12: true,
      })
      .replace(/\s/g, "")
      .toLowerCase();
    return formattedNextHourTime;
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        {formatedForcastData.hourlyData?.map((hour, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <Image src={iconSrcs[index]} className="w-[90px] m-1" />
            <Text>{getTime(index)}</Text>
            <Text className="opacity-60">
              {`${Math.round(hour.temp)}`}&deg;
            </Text>
          </div>
        ))}
      </div>
    </>
  );
};

export default HourlyForcast;

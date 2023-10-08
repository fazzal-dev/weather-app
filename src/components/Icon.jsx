import React, { useEffect, useState } from "react";
import useWeatherData from "../hooks/useWeatherData";
import { Image } from "@chakra-ui/react";

const Icon = ({ city }) => {
  const { formatedData } = useWeatherData(city);

  const description = formatedData?.weatherMain?.toLowerCase();

  const isDayTime = formatedData?.icon?.includes("d");
  const iconPath = isDayTime
    ? `../assets/icons/day/${description}.svg`
    : `../assets/icons/night/${description}.svg`;

  const [iconSrc, setIconSrc] = useState(null);

  useEffect(() => {
    import(iconPath)
      .then((module) => setIconSrc(module.default))
      .catch((error) => console.error(error));
  }, [iconPath]);

  return <Image src={iconSrc} className="w-[100px] h-[100px]" />;
};

export default Icon;

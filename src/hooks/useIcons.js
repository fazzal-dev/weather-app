import { useEffect, useState } from "react";
import useForcastData from "./useForcastData";

const useIcons = (city) => {
  const { formatedForcastData } = useForcastData(city);

  const descriptions =
    formatedForcastData?.description?.map((item) => item?.toLowerCase()) || [];

  const isDayTimes =
    formatedForcastData?.icon?.map((item) => item?.includes("d")) || [];

  const iconPaths = descriptions.map((description, index) => {
    const isDayTime = isDayTimes[index];
    return isDayTime
      ? `../assets/icons/day/${description}.svg`
      : `../assets/icons/night/${description}.svg`;
  });

  const [iconSrcs, setIconSrcs] = useState([]);

  useEffect(() => {
    const loadIcons = async () => {
      const iconPromises = iconPaths.map(async (path) => {
        try {
          const module = await import(path);
          return module.default;
        } catch (error) {
          console.error(error);
          return null;
        }
      });

      const iconSources = await Promise.all(iconPromises);
      setIconSrcs(iconSources);
    };

    loadIcons();
  }, [iconPaths]);

  return { iconSrcs };
};

export default useIcons;

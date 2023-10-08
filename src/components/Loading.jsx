import BeatLoader from "react-spinners/BeatLoader";
import { useLoading } from "./LoadingContext";

const Loading = () => {
  const { isLoading } = useLoading();
  return isLoading ? (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-transparent ">
      <BeatLoader isLoading={isLoading} aria-label="Loading Spinner" color="" />
    </div>
  ) : null;
};

export default Loading;

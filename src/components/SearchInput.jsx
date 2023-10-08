import { UilSearch } from "@iconscout/react-unicons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    const city = e.target.value.replace(/\s/g, "").toLowerCase();
    setCity(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(city);
    }
  };

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="flex flex-row justify-center ">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <InputGroup>
          <InputRightElement className="mt-1">
            <UilSearch
              size={20}
              className="cursor-pointer hover:opacity-50 transition hover:scale-125"
              onClick={handleSearch}
            />
          </InputRightElement>
          <Input
            placeholder="Search city..."
            variant={"filled"}
            size={"lg"}
            className=" absolute capitalize "
            value={city}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchInput;

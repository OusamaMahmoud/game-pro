import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../stores/gameQueryStore";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          setSearchText(searchRef.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Games..."
          variant={"filled"}
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

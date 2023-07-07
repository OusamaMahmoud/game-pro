import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (seachText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Games..."
          variant={"filled"}
          // onChange={(e) => onSearchGames(e.currentTarget.value)}
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

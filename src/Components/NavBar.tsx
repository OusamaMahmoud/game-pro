import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (seachText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image bg={"white"} borderRadius={"50%"} src={Logo} boxSize="60px" />
      <SearchInput
        onSearch={onSearch}
        // onSearchGames={(searchInput) => onSelecedGames(searchInput)}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

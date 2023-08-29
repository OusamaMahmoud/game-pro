import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";


const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}><Image bg={"white"} borderRadius={"50%"} src={Logo} boxSize="60px" objectFit={"cover"}/></Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

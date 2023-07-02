import { HStack, Image } from '@chakra-ui/react';
import Logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
        <Image bg={'white'} borderRadius={"50%"} src={Logo} boxSize='60px'/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
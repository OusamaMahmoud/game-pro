import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameBoxContainer = ({ children }: Props) => {
  return (
    <Box
    _hover={{
      transform:'scale(1.03)',
      transition:'transform .15s ease-in'
    }}
      borderRadius={5}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameBoxContainer;

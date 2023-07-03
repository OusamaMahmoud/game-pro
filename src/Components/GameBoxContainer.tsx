import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props{
  children: ReactNode;
}
const GameBoxContainer = ({children}:Props) => {
  return (
    <Box  borderRadius={5} overflow={"hidden"}>
      {children}
    </Box>
  )
}

export default GameBoxContainer
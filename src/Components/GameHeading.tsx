import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props{
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}:Props) => {
    
    const heading = `${gameQuery.genre?.name || ""} ${gameQuery.platform?.name || ""} ${gameQuery.sortOrder || ""}`;
 
  return (
    <>
        <Heading as={'h1'} marginY={5} fontSize={'5xl'}>{heading} Games</Heading>
    </>
  )
}

export default GameHeading 
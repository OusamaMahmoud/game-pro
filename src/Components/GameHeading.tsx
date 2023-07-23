import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';

interface Props{
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}:Props) => {
    const {data : genres}=useGenres();
    const {data : platforms}=useGenres();
    const genre = genres?.results.find(g => g.id === gameQuery.genreId)
    const platform = platforms?.results.find(p => p.id === gameQuery.platformId)
    const heading = `${genre?.name || ""} ${platform?.name || ""} ${gameQuery.sortOrder || ""}`;
 
  return (
    <>
        <Heading as={'h1'} marginY={5} fontSize={'5xl'}>{heading} Games</Heading>
    </>
  )
}

export default GameHeading 
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import Skeletons from "./Skeletons";

const GameGrid = () => {
  const { games, error ,isLoading} = useGames(); //custom hook
  const skeltons = [1 , 2 , 3 , 4 , 5 , 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid padding={'10px'}
        columns={{
          sm: 1,
          lg: 2,
          xl: 3,
        }}
        spacing={10}
      >
        {isLoading && skeltons.map(skeleton => <Skeletons key={skeleton}/>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

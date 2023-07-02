import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames(); //custom hook
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
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

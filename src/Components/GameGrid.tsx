import { SimpleGrid, Text } from "@chakra-ui/react";
import GameBoxContainer from "../Components/GameBoxContainer";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  const {data, error, isLoading } = useGames(); //custom hook
  const skeltons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={"10px"}
        columns={{
          sm: 1,
          lg: 2,
          xl: 3,
        }}
        spacing={10}
      >
        {isLoading &&
          skeltons.map((skeleton) => (
            <GameBoxContainer>
              <GameCardSkeleton key={skeleton} />
            </GameBoxContainer>
          ))}
        {data.map((game) => (
          <GameBoxContainer>
            <GameCard key={game.id} game={game} />
          </GameBoxContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

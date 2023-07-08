import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import GameBoxContainer from "../Components/GameBoxContainer";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery); //custom hook
  const skeltons = [1, 2, 3, 4, 5, 6];
  if (error) {
    error && <Text>{error}</Text>;
  }
  return (
    <SimpleGrid
      padding={"10px"}
      columns={{
        sm: 1,
        lg: 2,
        xl: 3,
      }}
      spacing={6}
    >
      {isLoading &&
        skeltons.map((skeleton) => (
          <GameBoxContainer key={skeleton}>
            <GameCardSkeleton />
          </GameBoxContainer>
        ))}
      {data.map((game) => (
        <GameBoxContainer key={game.id}>
          <GameCard game={game} />
        </GameBoxContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

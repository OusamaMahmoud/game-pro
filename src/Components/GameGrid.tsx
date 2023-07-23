import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import GameBoxContainer from "../Components/GameBoxContainer";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading ,fetchNextPage ,hasNextPage } = useGames(gameQuery); //custom hook
  const skeltons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  const fetchData =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll 
    dataLength={fetchData}
    next={()=> fetchNextPage()}
    hasMore={!!hasNextPage}
    loader={<Spinner />}
    >
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameBoxContainer key={game.id}>
                <GameCard game={game} />
              </GameBoxContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;

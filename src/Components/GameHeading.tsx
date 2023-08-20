import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenresLookUp from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {

  const genre = useGenresLookUp(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId)
  const heading = `${genre?.name || ""} ${platform?.name || ""} ${
    gameQuery.sortOrder || ""
  }`;

  return (
    <>
      <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
        {heading} Games
      </Heading>
    </>
  );
};

export default GameHeading;

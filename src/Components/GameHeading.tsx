import { Heading } from "@chakra-ui/react";
import useGenresLookUp from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenresLookUp(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const heading = `${genre?.name || ""} ${platform?.name || ""} ${
    sortOrder || ""
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

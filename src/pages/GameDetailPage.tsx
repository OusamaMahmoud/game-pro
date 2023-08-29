import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandbleText from "../Components/ExpandbleText";
import GameAttributes from "../Components/GameAttributes";

import ScreenShot from "../Components/ScreenShot";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandbleText>{game.description_raw}</ExpandbleText>
        <GameAttributes game={game}></GameAttributes>
      </Box>
      <ScreenShot gameId={game.id} />
    </SimpleGrid>
  );
};

export default GameDetailPage;

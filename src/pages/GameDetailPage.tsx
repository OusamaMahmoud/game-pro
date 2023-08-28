import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandbleText from "../Components/ExpandbleText";
import GameAttributes from "../Components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandbleText>{game.description_raw}</ExpandbleText>
      <GameAttributes game={game}></GameAttributes>
    </>
  );
};

export default GameDetailPage;

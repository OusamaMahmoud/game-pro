import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CricticScore from "./CricticScore";
import PlatformsIconList from "./PlatformsIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={5} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={30}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformsIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CricticScore scroe={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

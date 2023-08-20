import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Services/gameService";
import getCroppedImageUrl from "../Services/image-url";
import CricticScore from "./CricticScore";
import Emoji from "./Emoji";
import PlatformsIconList from "./PlatformsIconList";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={5}>
          <PlatformsIconList
            platforms={game.parent_platforms.map((p)=>p.platform)}
          />
          <CricticScore scroe={game.metacritic} />
        </HStack>
        <Heading fontSize={20}>{game.name} <Emoji rating={game.rating_top}/> </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

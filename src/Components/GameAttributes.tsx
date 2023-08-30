import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CricticScore from "./CricticScore";
import DifintionItem from "./DifintionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} marginY={4}>
      <DifintionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DifintionItem>
      <DifintionItem term="metacritic">
        <CricticScore scroe={game.metacritic} />
      </DifintionItem>
      <DifintionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DifintionItem>
      <DifintionItem term="Publisher">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DifintionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;

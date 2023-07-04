import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/image-url";
import useGenres from "../hooks/useGenres";

import { Genre } from "../hooks/useGenres";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  SelectedGenre: Genre | null ;
}

const GenresList = ({ SelectedGenre,onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize={"35px"}
                borderRadius={"5px"}
                marginY={"5px"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button fontWeight={genre.id === SelectedGenre?.id ? "bold" : "normal"} variant={"link"} onClick={() => onSelectedGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;

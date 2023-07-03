import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/image-url";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
            <Image boxSize={'35px'}borderRadius={'5px'} marginY={'5px'} src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize={'15px'}>{genre.name}</Text>
            </HStack>
            </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;

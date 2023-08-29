import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShot from "../hooks/useScreenShot";

interface Props {
  gameId: number;
}

const ScreenShot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShot(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((img) => (
          <Image src={img.image} key={img.id}></Image>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ScreenShot;

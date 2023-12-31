import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

import GameGrid from "../Components/GameGrid";
import GameHeading from "../Components/GameHeading";
import GenresList from "../Components/GenresList";
import PlatformsSelector from "../Components/PlatformsSelector";
import SortSelector from "../Components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `" main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `200px 1fr`,
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"10px"}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformsSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;

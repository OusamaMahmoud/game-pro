import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import NavBar from "./Components/NavBar";
import PlatformsSelector from "./Components/PlatformsSelector";
import SortSelector from "./Components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string ;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `" nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `200px 1fr`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"10px"}>
          <GenresList
            SelectedGenre={gameQuery.genre}
            onSelectedGenre={(genre: Genre) => setGameQuery({...gameQuery,genre})}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Flex  paddingLeft={2} marginBottom={5}>
          <Box marginX={5}>
          <PlatformsSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) => setGameQuery({...gameQuery,platform})}
          />
          </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder => setGameQuery({...gameQuery , sortOrder}))} />
        </Flex>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;

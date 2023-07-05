import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import NavBar from "./Components/NavBar";
import PlatformsSelector from "./Components/PlatformsSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
            SelectedGenre={selectedGenre}
            onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformsSelector
        selectedPlatform={selectedPlatform}
          onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

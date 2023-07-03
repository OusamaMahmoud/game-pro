import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `" nav nav" "aside main"`,
      }}
      templateColumns={{
        base : '1fr' ,
        lg:`200px 1fr`,
      }}
    >
      <GridItem  area={"nav"}>
        <NavBar/>
      </GridItem>
    <Show above="lg">
    <GridItem  area={"aside"} paddingX={'10px'}>
        <GenresList />
      </GridItem>
    </Show>
      <GridItem  area={"main"}>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;

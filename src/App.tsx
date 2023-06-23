import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `" nav nav" "aside main"`,
      }}
    >
      <GridItem bgColor={"red"} area={"nav"}>
        NavBar
      </GridItem>
    <Show above="lg">
    <GridItem bgColor={"blue"} area={"aside"}>
        Aside
      </GridItem>
    </Show>
      <GridItem bgColor={"green"} area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GamesGrid from "./components/GamesGrid"
function App() {
  return (
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg : `"nav nav" "aside main"`,
    }}>
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"blue.400"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"red.400"}>
        <GamesGrid/>
      </GridItem>
    </Grid>
  )
}

export default App
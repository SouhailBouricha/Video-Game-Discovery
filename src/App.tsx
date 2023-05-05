import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GamesGrid from "./components/GamesGrid"
import GenersList from "./components/GenersList"
import { useState } from "react"
import { Genre } from "./hook/useGeners"
function App() {
  const [selectedGenres,setSelectedGenres] = useState<Genre | null>(null);
  return (
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg : `"nav nav" "aside main"`,
    }} templateColumns={{ base : "1fr",
    lg : "200px 1fr",}}>
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenersList SelectedGener={selectedGenres} updateGener={(gener) => setSelectedGenres(gener)}/>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GamesGrid SelectedGenres={selectedGenres}/>
      </GridItem>
    </Grid>
  )
}

export default App
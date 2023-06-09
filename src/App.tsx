import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GamesGrid from "./components/GamesGrid"
import GenersList from "./components/GenersList"
import { useState } from "react"
import { Genre } from "./hook/useGeners"
import PlatformsSelector from "./components/PlatformsSelector"
import { Platfrom } from "./hook/usePlatforms"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"
function App() {
  const [selectedGenres,setSelectedGenres] = useState<Genre | null>(null);
  const [selectedPlatform,setSelectedPlatform] = useState<Platfrom | null>(null);
  const [selectedOrder,setSelectedOrder] = useState<string | null>(null);
  const [searchText,setSearchText] = useState<string | null>(null);
  return (
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg : `"nav nav" "aside main"`,
    }} templateColumns={{ base : "1fr",
    lg : "200px 1fr",}}>
      <GridItem area={"nav"}>
        <Navbar updateSearchText={(searchText) => setSearchText(searchText)}/>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenersList SelectedGener={selectedGenres} updateGener={(gener) => setSelectedGenres(gener)}/>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading selectedGenres={selectedGenres} selectedPlatform={selectedPlatform}/>
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformsSelector updatePlatforms={(platform) => setSelectedPlatform(platform)}/>
          </Box>
          <SortSelector updateOrder={(order) => setSelectedOrder(order)} selectedOrder={selectedOrder}/>
        </Flex>
        <GamesGrid SelectedGenres={selectedGenres} SelectedPlatform={selectedPlatform} selectedOrder={selectedOrder} searchText={searchText}/>
      </GridItem>
    </Grid>
  )
}

export default App
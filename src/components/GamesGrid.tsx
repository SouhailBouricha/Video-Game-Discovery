import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GameCard from "./GameCard";


function GamesGrid() {
    const { games,errors } =  useGames()
  return (
    <>
        {errors && <Text>{errors}</Text>}
        <SimpleGrid columns={{sm : 1, md : 2, lg : 3}} padding={"10px"} spacing={10}>
            {games.map(game => <GameCard key={game.id} game={game}/>)}
        </SimpleGrid>
    </>
  )
}

export default GamesGrid
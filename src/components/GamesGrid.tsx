import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";


function GamesGrid() {
  const { games,errors,isLoading } =  useGames()
  const skeletonItem = [1,2,3,4,5,6];
  return (
    <>
        {errors && <Text>{errors}</Text>}
        <SimpleGrid columns={{sm : 1, md : 2, lg : 3}} padding={"10px"} spacing={10}>
            {isLoading ? skeletonItem.map(item => <SkeletonCard key={item}/>) : null}
            {games.map(game => <GameCard key={game.id} game={game}/>)}
        </SimpleGrid>
    </>
  )
}

export default GamesGrid
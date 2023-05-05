import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { Genre } from "../hook/useGeners";

interface Props {
  SelectedGenres : Genre | null;
}
function GamesGrid({ SelectedGenres } : Props) {
  const { data,errors,isLoading } =  useGames(SelectedGenres)
  const skeletonItem = [1,2,3,4,5,6];
  return (
    <>
        {errors && <Text>{errors}</Text>}
        <SimpleGrid columns={{sm : 1, md : 2, lg : 3}} padding={"10px"} spacing={10}>
            {isLoading ? skeletonItem.map(item => <SkeletonCard key={item}/>) : null}
            {data.map(game => <GameCard key={game.id} game={game}/>)}
        </SimpleGrid>
    </>
  )
}

export default GamesGrid
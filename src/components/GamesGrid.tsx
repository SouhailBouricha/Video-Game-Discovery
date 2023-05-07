import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { Genre } from "../hook/useGeners";
import { Platfrom } from "../hook/usePlatforms";

interface Props {
  SelectedGenres : Genre | null;
  SelectedPlatform : Platfrom | null;
  selectedOrder : string | null;
  searchText : string | null;
}
function GamesGrid({ SelectedGenres,SelectedPlatform,selectedOrder,searchText} : Props) {
  const { data,errors,isLoading } =  useGames(SelectedGenres,SelectedPlatform,selectedOrder,searchText)
  const skeletonItem = [1,2,3,4,5,6];
  if(errors) return <Text>{errors}</Text>
  return (
      <SimpleGrid columns={{sm : 1, md : 2, lg : 3, xl : 4}} padding={"10px"} spacing={6}>
          {isLoading ? skeletonItem.map(item => <SkeletonCard key={item}/>) : null}
          {data.map(game => <GameCard key={game.id} game={game}/>)}
      </SimpleGrid>
  )
}

export default GamesGrid
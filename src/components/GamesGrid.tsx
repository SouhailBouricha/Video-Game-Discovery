import { Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";


function GamesGrid() {
    const { games,errors } =  useGames()
  return (
    <>
        {errors && <Text>{errors}</Text>}
        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    </>
  )
}

export default GamesGrid
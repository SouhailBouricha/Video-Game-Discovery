import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface game{
    id : number;
    name : string; 
}
interface resopnd {
    count : number;
    results : game[];
}
function GamesGrid() {
  const [games, setGames] = useState<game[]>([]);
  const [errors, setErrors] = useState("");
  useEffect(() =>{
    apiClient.get<resopnd>("/games").then(res => {
        setGames(res.data.results);
    }).catch(err =>{
        setErrors(err.message);
    })
  });
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
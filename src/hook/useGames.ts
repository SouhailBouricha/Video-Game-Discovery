import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform{
  id : number;
  name : string;
  slug : string;
} 
export interface Game{
  id : number;
  name : string; 
  background_image : string; 
  parent_platforms : {platform : Platform}[];
  metacritic : number;
}
interface Resopnd {
  count : number;
  results : Game[];
}
function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() =>{
    setIsLoading(true);
    apiClient.get<Resopnd>("/games").then(res => {
      setGames(res.data.results);
      setIsLoading(false);
    }).catch(err =>{
      setErrors(err.message);
      setIsLoading(false);
    })
  },[]);
  return {games , errors, isLoading}
}

export default useGames
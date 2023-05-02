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
}
interface Resopnd {
  count : number;
  results : Game[];
}
function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  useEffect(() =>{
    apiClient.get<Resopnd>("/games").then(res => {
        setGames(res.data.results);
    }).catch(err =>{
        setErrors(err.message);
    })
  },[]);
  return {games , errors}
}

export default useGames
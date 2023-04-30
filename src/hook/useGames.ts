import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface game{
  id : number;
  name : string; 
}
interface resopnd {
  count : number;
  results : game[];
}
function useGames() {
  const [games, setGames] = useState<game[]>([]);
  const [errors, setErrors] = useState("");
  useEffect(() =>{
    apiClient.get<resopnd>("/games").then(res => {
        setGames(res.data.results);
    }).catch(err =>{
        setErrors(err.message);
    })
  },[]);
  return {games , errors}
}

export default useGames
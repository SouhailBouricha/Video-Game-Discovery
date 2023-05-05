import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGeners";

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

const useGames = (SelectedGenres : Genre | null) => useData<Game>("/games",[SelectedGenres?.id], { params : { genres : SelectedGenres?.id}});

export default useGames
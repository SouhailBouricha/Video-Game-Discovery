import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGeners";
import { Platfrom } from "./usePlatforms";

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

const useGames = (SelectedGenres : Genre | null,SelectedPlatform : Platfrom | null,selectedOrder : string | null,searchText : string | null) => useData<Game>("/games",[SelectedGenres?.id,SelectedPlatform?.id,selectedOrder,searchText], { params : { genres : SelectedGenres?.id, platforms : SelectedPlatform?.id, ordering : selectedOrder, search : searchText}});

export default useGames
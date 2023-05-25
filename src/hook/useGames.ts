import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
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
interface Variables {
  SelectedGenres : Genre | null;
  SelectedPlatform : Platfrom | null;
  selectedOrder : string | null;
  searchText : string | null;
}

const useGames = (SelectedGenres : Genre | null,SelectedPlatform : Platfrom | null,selectedOrder : string | null,searchText : string | null) => {
  return useQuery<Resopnd,Error>({
    queryKey : ["games",SelectedGenres?.id,SelectedPlatform?.id,selectedOrder,searchText],
    queryFn : () => apiClient.get<Resopnd>("/games",{ params : { genres : SelectedGenres?.id, parent_platforms : SelectedPlatform?.id, ordering : selectedOrder, search : searchText}}).then(res => res.data),
    staleTime : 24 * 60 * 60 * 1000, //24h
  })
} 
export default useGames
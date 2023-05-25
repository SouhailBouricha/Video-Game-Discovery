import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import PlatformsData from "./PlatformsData";


export interface Platfrom {
    id : number;
    name : string;
    slug : string;
}
interface Resopnd{
    count : number;
    results : Platfrom[];
}
// const usePlatforms = () => useData<Platfrom>("/platforms/lists/parents");
const usePlatforms = () => useQuery({
    queryKey : ["Platforms"],
    queryFn : () => { return apiClient.get<Resopnd>("/platforms/lists/parents").then(res => res.data)},
    staleTime : 24 * 60 * 60 * 1000 , //24
    initialData : PlatformsData,
});

export default usePlatforms;
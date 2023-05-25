import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import GenersData from "./GenresData";

export interface Genre{
    id : number;
    name : string;
    image_background : string;
}
interface Resopnd{
    count : number;
    results : Genre[];
}
// const useGeners = () => useData<Genre>("/genres");
const useGeners = () => useQuery({
    queryKey : ["genres"],
    queryFn : () => { return apiClient.get<Resopnd>("/genres").then(res => res.data)},
    staleTime : 24 * 60 * 60 * 1000, //24
    initialData : GenersData
})

export default useGeners;
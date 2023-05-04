import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre{
    id : number;
    name : string;
}
interface Resopnd{
    count : number;
    results : Genre[];
}

const useGeners = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() =>{
      setIsLoading(true);
      apiClient.get<Resopnd>("/genres").then(res => {
        setGenres(res.data.results);
        setIsLoading(false);
      }).catch(err =>{
        setErrors(err.message);
        setIsLoading(false);
      })
    },[]);
    return {genres , errors, isLoading}
};

export default useGeners;
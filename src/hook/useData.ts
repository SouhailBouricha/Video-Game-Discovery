import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Resopnd<T>{
    count : number;
    results : T[];
}

const useData = <T>(endpoint : string) => {
    const [data, setData] = useState<T[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() =>{
      const controller = new AbortController();
      setIsLoading(true);
      apiClient.get<Resopnd<T>>(endpoint).then(res => {
        setData(res.data.results);
        setIsLoading(false);
      }).catch(err =>{
        if(err instanceof CanceledError) return;
        setErrors(err.message);
        setIsLoading(false);
      })

      return () => controller.abort();
    },[]);
    return {data , errors, isLoading}
};

export default useData;
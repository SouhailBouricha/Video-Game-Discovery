import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

interface Genre{
    id : number;
    name : string;
}
interface Resopnd{
    count : number;
    results : Genre[];
}
const useGeners = () => useData<Genre>("/genres");

export default useGeners;
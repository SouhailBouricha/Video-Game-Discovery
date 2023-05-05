import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre{
    id : number;
    name : string;
    image_background : string;
}
interface Resopnd{
    count : number;
    results : Genre[];
}
const useGeners = () => useData<Genre>("/genres");

export default useGeners;
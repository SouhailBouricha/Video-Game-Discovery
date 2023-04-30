import axios from "axios";


export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "53bc2ad7bf46402cae35958fe9a9cd92"
    }
})
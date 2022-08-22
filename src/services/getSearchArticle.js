import axios from "axios";
import { getApiURL } from "../config"

export const getAllArticle = () => {
    const apiUrl = getApiURL();
    return axios.get(apiUrl).then(res => res.data )
}
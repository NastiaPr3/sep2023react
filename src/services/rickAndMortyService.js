import {apiService} from "./apiService";
import {urls} from "../constants";

const rickAndMortyService = {
    getAllEpisodes: (page = '1') => apiService.get(urls.episodes.base, {params: {page}})
}


export {
    rickAndMortyService
}
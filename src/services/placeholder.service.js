import {axiosService} from "./api.service";
import {urls} from "../constants/urls";

const placeholderService = {
    getAllAlbums: () => axiosService.get(urls.albums),
    getAllTodos: () => axiosService.get(urls.todos),
    getAllComments: () => axiosService.get(urls.comments.base),
    getPostById: (id) => axiosService(urls.comments.getPostById(id))
}

export {
    placeholderService
}
import {axiosService} from "./axiosService";
import {urls} from "../../constants/urls";

const postService = {
    getAll: () => axiosService(urls.base),
    getById: (id) => axiosService(urls.byId(id))
}

export {
    postService
}
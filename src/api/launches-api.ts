import axios from "axios";
import {PaginatedLaunchesType} from "../types/types";

export const launchesApi = {
    getPaginatedLaunches(page = 1) {
        return axios.post<PaginatedLaunchesType>
        (`https://api.spacexdata.com/v4/launches/query`, {query: {}, options: {page, limit: 30}})
            .then(response => response.data)
    },

    getRockets() {
        return axios.get<any>
        (`https://api.spacexdata.com/v4/rockets`).then(response => response.data)
    },

    getCores() {
        return axios.get<any>
        (`https://api.spacexdata.com/v4/cores`).then(response => response.data)
    }
}
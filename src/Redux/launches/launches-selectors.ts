import {AppStateType} from "./../redux-store";

export const getPaginatedLaunches = (state: AppStateType) => {
    return state.launches.paginatedLaunches;
}
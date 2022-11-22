import {LaunchType, PaginatedLaunchesType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {launchesApi} from "../../api/launches-api";

const initialState = {
    paginatedLaunches: {} as PaginatedLaunchesType,
    allLaunches: [] as Array<LaunchType>,
    rockets: [] as Array<any>,
    cores: [] as Array<any>
}

export type InitialStateType = typeof initialState

const launchesReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'LAUNCHES/SET_PAGINATED_LAUNCHES':
            return {
                ...state,
                paginatedLaunches: action.payload.paginatedLaunches,
                allLaunches: [...state.allLaunches, ...action.payload.paginatedLaunches.docs]
            }
        case 'LAUNCHES/SET_ROCKETS':
            return {
                ...state,
                rockets: [...action.payload.rockets]
            }
        case 'LAUNCHES/SET_CORES':
            return {
                ...state,
                cores: [...action.payload.core]
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setPaginatedLaunches: (paginatedLaunches: PaginatedLaunchesType) => (
        {
            type: 'LAUNCHES/SET_PAGINATED_LAUNCHES',
            payload: {paginatedLaunches}
        } as const
    ),
    setRockets: (rockets: any) => (
        {
            type: 'LAUNCHES/SET_ROCKETS',
            payload: {rockets}
        } as const
    ),
    setCores: (core: any) => (
        {
            type: 'LAUNCHES/SET_CORES',
            payload: {core}
        } as const
    )
}

type ThunkType = BaseThunkType<ActionsType>

export const requestPaginatedLaunches = (page: number): ThunkType => {
    return async (dispatch) => {
        const data: PaginatedLaunchesType = await launchesApi.getPaginatedLaunches(page);
        dispatch(actions.setPaginatedLaunches(data));
    }
}

export const requestRockets = (): ThunkType => {
    return async (dispatch) => {
        const data: any = await launchesApi.getRockets();
        dispatch(actions.setRockets(data));
    }
}

export const requestCores = (): ThunkType => {
    return async (dispatch) => {
        const data: any = await launchesApi.getCores();
        dispatch(actions.setCores(data));
    }
}

export default launchesReducer;
export type PaginatedLaunchesType = {
    docs: Array<LaunchType>
    totalDocs: number
    offset: number
    limit: number
    totalPages: number
    page: number
    pagingCounter: number
    hasPrevPage: boolean
    hasNextPage: boolean
    prevPage: number
    nextPage: number
}

export type LaunchType = {
    cores: Array<any>
    crew: Array<any>
    date_local: string
    date_precision: string
    date_unix: number
    date_utc: string
    details: string
    failures: Array<any>
    fairings: object
    flight_number: number
    id: string
    launch_library_id: any
    launchpad: string
    links: object
    name: string
    net: boolean
    payloads: Array<any>
    rocket: string
    ships: Array<any>
    static_fire_date_unix: number
    static_fire_date_utc: string
    success: boolean
    tbd: boolean
    upcoming: boolean
    window: number
    capsules: Array<any>
    auto_update: boolean
}

export type PokemonType = {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Array<any>
    game_indices: Array<any>
    location_area_encounters: string
    moves: Array<any>
    past_types: Array<any>
    sprites: any
    species: any
    stats: Array<any>
    types: Array<any>
}

export type MoveType = {
    move: {
        name: string
        url: string
    }
    version_group_details: any
}

export type StatType = {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}

export interface IAllTypes {
    count: number
    next: string | null
    previous: string | null
    results: Array<IType>
}

export interface IType {
    name: string
    url: string
}